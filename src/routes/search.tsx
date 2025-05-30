import { createFileRoute } from "@tanstack/react-router";
import { Stock } from "@/components/Stock";
import { SearchBar } from "@/components/Searchbar";

export const Route = createFileRoute("/search")({
  component: RouteComponent,
  validateSearch: (search) => ({
    symbol: typeof search.symbol === "string" ? search.symbol : undefined,
  }),
});

function RouteComponent() {
  const { symbol } = Route.useSearch();

  return (
    <div className="flex flex-col items-center mt-20 px-4 space-y-8">
      <SearchBar />
      {symbol && <Stock symbol={symbol} />}
    </div>
  );
}
