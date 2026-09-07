/**
 * Connecteur vers l'API de création de leads HomeService.
 * Doc : POST https://europe-west1-app-home-service.cloudfunctions.net/receiveLead
 */

export const HOMESERVICE_ENDPOINT =
  process.env.HOMESERVICE_LEAD_ENDPOINT ||
  'https://europe-west1-app-home-service.cloudfunctions.net/receiveLead'

/** Slug d'activité de ce site (liste complète : https://homeservice-pro.fr/admin/activites) */
export const HOMESERVICE_ACTIVITE = process.env.HOMESERVICE_ACTIVITE || 'distribution'

/** Valeur imposée par Reda pour distinguer les sources de leads. Ne pas remplacer par le domaine. */
export const HOMESERVICE_ORIGINE = process.env.HOMESERVICE_ORIGINE || 'site-formulaire-rachid'

export type HomeServicePayload = {
  nom: string
  tel: string
  adresse: string
  cp: string
  ville: string
  departement: string
  message: string
  email?: string
  activite: string
  origine: string
}

/**
 * Déduit le numéro de département d'un code postal français.
 * Corse : 200xx/201xx -> 2A, 202xx+ -> 2B. DOM/TOM : 3 premiers chiffres.
 */
export function departementFromCodePostal(cp: string): string | null {
  const digits = (cp || '').replace(/\D/g, '')
  if (digits.length !== 5) return null

  if (digits.startsWith('20')) {
    return Number(digits) < 20200 ? '2A' : '2B'
  }
  if (digits.startsWith('97') || digits.startsWith('98')) {
    return digits.slice(0, 3)
  }
  return digits.slice(0, 2)
}

/** Normalise un numéro de téléphone saisi (espaces, points, tirets, +33). */
export function normalizeTelephone(tel: string): string {
  const cleaned = (tel || '').replace(/[\s.\-()]/g, '')
  if (cleaned.startsWith('+33')) return '0' + cleaned.slice(3)
  if (cleaned.startsWith('0033')) return '0' + cleaned.slice(4)
  return cleaned
}

export type LeadInput = {
  nom: string
  telephone: string
  email?: string
  sujet?: string
  adresse?: string
  cp: string
  ville: string
  message: string
  /** Page du site depuis laquelle le lead a été soumis (info pour la qualification) */
  page?: string
}

/** Construit le corps de requête HomeService à partir des champs du formulaire. */
export function buildHomeServicePayload(input: LeadInput): HomeServicePayload {
  const departement = departementFromCodePostal(input.cp)
  if (!departement) {
    throw new Error('Code postal invalide')
  }

  const message = [
    input.sujet ? `Sujet : ${input.sujet}` : null,
    input.message,
    input.page ? `Page : ${input.page}` : null,
  ]
    .filter(Boolean)
    .join('\n\n')

  const payload: HomeServicePayload = {
    nom: input.nom.trim(),
    tel: normalizeTelephone(input.telephone),
    // Sans numéro + rue, on envoie la ville : le géocodage BAN tombe au centre de la commune.
    adresse: (input.adresse || '').trim() || input.ville.trim(),
    cp: input.cp.replace(/\D/g, ''),
    ville: input.ville.trim(),
    departement,
    message,
    activite: HOMESERVICE_ACTIVITE,
    origine: HOMESERVICE_ORIGINE,
  }

  const email = (input.email || '').trim()
  if (email) payload.email = email

  return payload
}

export type HomeServiceResult =
  | { ok: true; leadId?: string }
  | { ok: false; status?: number; error: string }

/** Envoie le lead à HomeService. Ne lève jamais : renvoie toujours un résultat exploitable. */
export async function sendLeadToHomeService(
  payload: HomeServicePayload
): Promise<HomeServiceResult> {
  try {
    const response = await fetch(HOMESERVICE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    })

    const raw = await response.text()
    let body: any = null
    try {
      body = raw ? JSON.parse(raw) : null
    } catch {
      // réponse non-JSON : on garde le texte brut pour les logs
    }

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        error: body?.error || raw || `HTTP ${response.status}`,
      }
    }

    return { ok: true, leadId: body?.leadId }
  } catch (error: any) {
    return { ok: false, error: error?.message || 'Erreur réseau vers HomeService' }
  }
}
