// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // IMPORTANT: Change this to your actual frontend URL in production!
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS', // Allow POST and OPTIONS for preflight requests
};

console.log(`Function "create-test-entry" up and running!`);

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
      }
    );
  
    const authHeader = req.headers.get('Authorization'); // Removed '!' for safety
    if (!authHeader) {
      // Return 401 if no Authorization header is present
      return new Response(JSON.stringify({ error: 'Authorization header missing' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, // Include CORS headers
        status: 401,
      });
    }

    const token = authHeader.replace('Bearer ', '');
    // Corrected destructuring: getUser returns { data: { user } }
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    const user = userData?.user; // Use optional chaining for safety

    if (userError || !user) {
      console.error("Authentication error:", userError?.message || 'User data is null');
      return new Response(JSON.stringify({ error: 'Unauthorized: Invalid or expired token' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, // Include CORS headers
        status: 401,
      });
    }
  
    console.log("Function called by user:", user.id); // user.id is now guaranteed to exist here
  
    const newId = crypto.randomUUID();
  
    const { data, error: insertError } = await supabaseClient
      .from('test_data')
      .insert({ id: newId, message: `Entry from user ${user.id}`, user_id: user.id}); // user.id is now guaranteed to exist here
    
    if (insertError) {
      console.error("Error inserting data:", insertError);
      return new Response(JSON.stringify({ error: insertError.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, // Include CORS headers
        status: 500
      });
    }
  
    return new Response(JSON.stringify({ success: true, id: newId, userId: user.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }, // Include CORS headers
      status: 200
    });
  } catch (error) {
    console.error("Error in function:", error);
    return new Response(JSON.stringify({error: error.message}), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }, // Include CORS headers
      status: 500
    });
  }
});
