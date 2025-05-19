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
      <p>Kurs: {data.c}</p>
      <p>Öppning: {data.o}</p>
      <p>Högsta idag: {data.h}</p>
      <p>Lägsta idag: {data.l}</p>
    </div>
  );
};
