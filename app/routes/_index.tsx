import type {V2_MetaFunction} from "@remix-run/node";
import "../css/style.css";
import App from "~/components/App";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "Tomat"},
        {name: "description", content: "25:00 - Get focused with Tomat"},
    ];
};

export default function Index() {
    return (
        <div className="border-2 border-green-400">
            <Navbar/>
            <div className="border-2 border-purple-400">
                <App/>
            </div>

        </div>
    );
}
