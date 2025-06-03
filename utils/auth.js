import { supabase } from "../src/config/supabaseClient.js";

export const signOut = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        console.log("User signed out successfully");
    } catch (error) {
        console.error("Error signing out:", error.message);
    }
}