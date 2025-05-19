import { fetchQuote } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

export const StockMarketIndex = ({ symbol }: { symbol: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quote", symbol],
    queryFn: () => fetchQuote(symbol),
  });

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Something went wrong</div>;

  return (
    <div className="bg-gray-200 rounded-xl p-6 shadow-md max-w-md w-full">
      <h3>{symbol}</h3>
      <p>Price: {data.c}</p>
      <p>Opening price: {data.o}</p>
      <p>Day high: {data.h}</p>
      <p>Day low: {data.l}</p>
    </div>
  );
};
