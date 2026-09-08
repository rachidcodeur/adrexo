/**
 * PROXY DE LEAD — Cloudflare Pages Function.
 *
 * Raison d'être : le CDC demande un secret partagé en en-tête vers receiveLead.
 * Sur un site statique, un secret placé dans le JavaScript serait lisible par
 * n'importe quel visiteur. Il est donc porté ici, côté serveur, via les
 * variables d'environnement du projet Cloudflare Pages :
 *
 *   LEAD_ENDPOINT   URL de l'API receiveLead
 *   LEAD_SECRET     secret partagé, envoyé en en-tête X-Api-Secret
 *
 * Cette fonction est le SEUL composant non statique du site.
 */
export async function onRequestPost({ request, env }) {
  const refus = (code, message) =>
    new Response(JSON.stringify({ ok: false, message }), {
      status: code, headers: { 'Content-Type': 'application/json' },
    })

  let lead
  try { lead = await request.json() } catch { return refus(400, 'Corps de requête invalide') }

  // Garde-fous minimaux — le honeypot est déjà filtré côté client.
  if (!lead || typeof lead !== 'object') return refus(400, 'Données manquantes')
  if (!lead.telephone || !lead.nom) return refus(422, 'Nom et téléphone requis')
  if (lead.site_web) return new Response(JSON.stringify({ ok: true }), { status: 200 })

  // Normalisation du téléphone : sert de clé de dédoublonnage côté API.
  const telNormalise = String(lead.telephone).replace(/\D/g, '').replace(/^33/, '0')
  if (telNormalise.length < 9) return refus(422, 'Téléphone invalide')

  const charge = {
    ...lead,
    telephone: telNormalise,
    cle_dedoublonnage: telNormalise,
    user_agent: request.headers.get('user-agent') || '',
    recu_le: new Date().toISOString(),
  }

  if (!env.LEAD_ENDPOINT || !env.LEAD_SECRET) {
    return refus(500, 'Configuration serveur incomplète')
  }

  const reponse = await fetch(env.LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Api-Secret': env.LEAD_SECRET },
    body: JSON.stringify(charge),
  })

  if (!reponse.ok) return refus(502, 'L’API de réception a renvoyé une erreur')
  return new Response(JSON.stringify({ ok: true }), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  })
}
