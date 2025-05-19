import { createFileRoute } from "@tanstack/react-router";
import { StockMarketIndex } from "@/components/Stockmarketindex";

export const Route = createFileRoute("/search")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex justify-center mt-20 px-4">
        <StockMarketIndex symbol="MSFT" />
      </div>
    </>
  );
}
