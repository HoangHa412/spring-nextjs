import Login from "@/components/Authentication";
import FormSignUp from "@/components/Authentication/SignUp/FormSignUp";

export default function Home() {
    return (
        <div>
            <Login>
                <FormSignUp />
            </Login>
        </div>
    );
}

