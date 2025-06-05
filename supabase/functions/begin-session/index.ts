import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'
import { corsHeaders } from '../../_shared/cors.ts'


Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
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

    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);

    if (userError || !userData.user) {
      console.error('Authentication error:', userError?.message || 'User not found');
      return new Response(JSON.stringify({ error: 'Unauthorized: Invalid or expired token' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    const user = userData.user;
    console.log(`User ${user.id} attempting to begin a session.`);

    const { durationMinutes } = await req.json()

    if (typeof durationMinutes !== 'number' || durationMinutes <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid duration' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const { data: activeSessions, error: activeSessionsError } = await supabaseClient
      .from('session')
      .select('id')
      .eq('user_id', user.id)
      .eq('status', 'active');

    if (activeSessionsError) {
      console.error('Error checking for active sessions:', activeSessionsError);
      return new Response(JSON.stringify({ error: "Failed to check for existing sessions."}), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      })
    }

    if (activeSessions && activeSessions.length > 0) {
      console.warn(`User ${user.id} already has an active session.`);
      return new Response(JSON.stringify({ error: 'You already have an active session.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 409,
      });
    }


    const startTime = new Date()
    const endTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000)

    const { data: sessionData, error: insertError } = await supabaseClient
      .from('session')
      .insert({
        user_id: user.id,
        duration_minutes: durationMinutes,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        status: 'active',
        reward_earned: false,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting session:', insertError);
      return new Response(JSON.stringify({ error: insertError.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    return new Response(JSON.stringify({
      success: true,
      sessionId: sessionData.id,
      startTime: sessionData.start_time,
      endTime: sessionData.end_time,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });


  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

