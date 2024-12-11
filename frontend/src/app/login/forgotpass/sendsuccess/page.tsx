import Login from "@/components/Authentication";
import SendSuccess from "@/components/Authentication/ForgorPassword/SendSuccess";

export default function Home() {
    return (
        <div >
            <Login>
                <SendSuccess />
            </Login>
        </div>
    );
}

