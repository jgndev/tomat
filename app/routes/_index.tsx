import type { V2_MetaFunction } from "@remix-run/node";
import "../css/style.css";
import App from "~/components/App";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Tomat" },
    { name: "description", content: "25:00 - Time to focus with Tomat" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <App />
    </div>
  );
}
