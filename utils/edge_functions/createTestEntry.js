import { supabase } from "../../src/config/supabaseClient.js";

const URL = "https://qqazzunqaycheihxbbjh.supabase.co/functions/v1/create-test-entry"

export const createTestEntry = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        console.error("Can't call edge function without authenticated user");
        return;
    }
    
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.access_token}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message || 'Unknown error'}`);
        }

        const data = await response.json();
        console.log("Created test entry for user:", data.user_id);
        return data;
    } catch (error) {
        console.error("Error creating test entry:", error.message);
        return;
    }
}