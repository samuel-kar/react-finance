import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import samwiseLogo from "../utils/samwise.png";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App flex flex-col items-center justify-center mt-16">
      <img
        src={samwiseLogo}
        className="w-66 h-auto rounded-full mb-6"
        alt="Samwise logo"
      />
      <header className="text-center">
        <h1 className="text-4xl md:text-xl font-serif italic font-bold text-white">
          Investing isn’t magic — it’s just like potatoes: <br />
          plant smart, grow steady, harvest big.
        </h1>
      </header>
    </div>
  );
}
