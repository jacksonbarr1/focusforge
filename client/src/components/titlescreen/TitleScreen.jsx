import { useState } from "react";
import { Input } from "nes-ui-react";
import { supabase } from "../../config/supabaseClient";

const TitleScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp(
            {
                email: email,
                password: password
            }
        )
        console.log("Sign Up Data: ", data);
        console.log("Sign Up Error: ", error);
    };

    return (
        <>
            <div>TitleScreen</div>
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default TitleScreen;