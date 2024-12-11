import Login from "../../components/Authentication";
import '../globals.css'
import FormLogin from "@/components/Authentication/SignIn/FormLogin";

export default function Home() {
    return (
        <div>
            <Login>
                <FormLogin/>
            </Login>
        </div>
    );
}

