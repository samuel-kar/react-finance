import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";
import "../App.css";

import { StockMarketIndex } from "@/components/Stockmarketindex";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App">
      <div className="bg-red-500 text-white p-10 text-3xl">
        FUNKAR TAILWIND NU?
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="bg-green-500 text-white p-10 text-3xl">
          FUNKAR TAILWIND NU?
        </div>
        <StockMarketIndex symbol="MSFT" />
        <a
          className="App-link"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  );
}
