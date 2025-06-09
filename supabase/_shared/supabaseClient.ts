import { createClient } from 'jsr:@supabase/supabase-js@2'

export function getSupabaseClient(req) {
    return createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_ANON_KEY') ?? '',
        {
            global: {
            headers: { Authorization: req.headers.get('Authorization') },
            },
            auth: {
            autoRefreshToken: false,
            detectSessionInUrl: false,
            persistSession: false,
            },
        }
    );
}