import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";
import "../App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StockMarketIndex } from "@/components/Stockmarketindex";

const queryClient = new QueryClient();

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App">
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
        <QueryClientProvider client={queryClient}>
          <StockMarketIndex symbol="MSFT" />
        </QueryClientProvider>
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
