import type {V2_MetaFunction} from "@remix-run/node";
import "../css/style.css";
import App from "~/components/App";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "Tomat"},
        {name: "description", content: "25:00 - Get focused with Tomat, a pomodoro timer"},
    ];
};

export default function Index() {
    return (
        <main className="mx-8">
            <Navbar/>
            <div className="">
                <App/>
            </div>

        </main>
    );
}
