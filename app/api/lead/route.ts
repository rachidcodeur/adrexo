import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import {
  buildHomeServicePayload,
  departementFromCodePostal,
  normalizeTelephone,
  sendLeadToHomeService,
  type LeadInput,
} from '@/lib/homeservice'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TABLE = 'adrexo_contact_submissions'

/** Colonnes ajoutées par supabase_migration_leads.sql (absentes de la table d'origine). */
const EXTRA_COLUMNS = ['adresse', 'code_postal', 'departement', 'page', 'homeservice_lead_id']

function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  // La service_role contourne RLS : ne jamais l'exposer au client.
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

async function archiveInSupabase(input: LeadInput, homeserviceLeadId?: string) {
  const supabase = getSupabaseServerClient()
  if (!supabase) return { ok: false, error: 'Supabase non configuré' }

  const row: Record<string, any> = {
    nom: input.nom,
    telephone: normalizeTelephone(input.telephone),
    email: input.email || '',
    sujet: input.sujet || 'Demande de devis',
    ville: input.ville,
    message: input.message,
    adresse: input.adresse || '',
    code_postal: input.cp,
    departement: departementFromCodePostal(input.cp),
    page: input.page || '',
    homeservice_lead_id: homeserviceLeadId || null,
  }

  let { error } = await supabase.from(TABLE).insert([row])

  // Tant que la migration des colonnes n'est pas passée, on retombe sur le schéma d'origine.
  if (error?.code === 'PGRST204' || error?.code === '42703') {
    const base = { ...row }
    for (const column of EXTRA_COLUMNS) delete base[column]
    ;({ error } = await supabase.from(TABLE).insert([base]))
  }

  if (error) {
    console.error('[lead] Supabase insert failed:', error)
    return { ok: false, error: error.message }
  }
  return { ok: true }
}

export async function POST(request: Request) {
  let body: any
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'JSON invalide' }, { status: 400 })
  }

  const input: LeadInput = {
    nom: String(body.nom || '').trim(),
    telephone: String(body.telephone || '').trim(),
    email: String(body.email || '').trim(),
    sujet: String(body.sujet || '').trim(),
    adresse: String(body.adresse || '').trim(),
    cp: String(body.cp || '').trim(),
    ville: String(body.ville || '').trim(),
    message: String(body.message || '').trim(),
    page: String(body.page || '').trim(),
  }

  const missing = (['nom', 'telephone', 'cp', 'ville', 'message'] as const).filter(
    (field) => !input[field]
  )
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Champs manquants : ${missing.join(', ')}` },
      { status: 400 }
    )
  }

  if (!departementFromCodePostal(input.cp)) {
    return NextResponse.json(
      { error: 'Code postal invalide (5 chiffres attendus)' },
      { status: 400 }
    )
  }

  if (normalizeTelephone(input.telephone).replace(/\D/g, '').length < 9) {
    return NextResponse.json({ error: 'Numéro de téléphone invalide' }, { status: 400 })
  }

  const homeservice = await sendLeadToHomeService(buildHomeServicePayload(input))
  if (!homeservice.ok) {
    console.error('[lead] HomeService rejected the lead:', homeservice)
  }

  // L'archive Supabase ne doit jamais faire échouer la soumission côté visiteur.
  const archive = await archiveInSupabase(input, homeservice.ok ? homeservice.leadId : undefined)

  if (!homeservice.ok && !archive.ok) {
    return NextResponse.json(
      { error: "Impossible d'enregistrer votre demande. Merci de nous contacter directement." },
      { status: 502 }
    )
  }

  return NextResponse.json(
    {
      success: true,
      leadId: homeservice.ok ? homeservice.leadId : undefined,
      homeservice: homeservice.ok,
      archived: archive.ok,
    },
    { status: 201 }
  )
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée' }, { status: 405 })
}
