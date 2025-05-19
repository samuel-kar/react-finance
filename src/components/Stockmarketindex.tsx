import { fetchQuote } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

type quote = {};

export const StockMarketIndex = ({ symbol }: { symbol: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quote", symbol],
    queryFn: () => fetchQuote(symbol),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

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
