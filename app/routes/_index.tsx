import type { V2_MetaFunction } from "@remix-run/node";
import "../css/style.css";
import App from "~/components/App";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Tomat" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {/*<Timer initialMinutes={3} initialSeconds={0} />*/}
      <App />
    </div>
  );
}
