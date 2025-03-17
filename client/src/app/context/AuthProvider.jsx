import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../config/supabaseClient";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            console.log("Auth Session:", session);
      
            if (error) {
              console.error("Error fetching session:", error);
            }
            setUser(session?.user || null);
          };
      
          checkAuth();

        const { data: authListener} = supabase.auth.onAuthStateChange(
            (event, session) => {
                console.log("Auth event:", event);
                setUser(session?.user ?? null);
            }
        );

        console.log("AuthProvider is rendering, user: ", user);

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



