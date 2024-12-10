import Login from "../../components/Authentication";
import '../globals.css'

export default function Home() {
    return (
        <div
            className="contact-container h-screen mx-auto w-full p-[94px] flex items-center"
        >
            <Login />
        </div>
    );
}

