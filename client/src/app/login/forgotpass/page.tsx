import Login from "@/components/Authentication";
import FormForgot from "@/components/Authentication/ForgorPassword/FormForgot";

export default function Home() {
    return (
        <div>
            <Login>
                <FormForgot />
            </Login>
        </div>
    );
}

