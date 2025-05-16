const API_URL = "";

const API_KEY = "d0jfa31r01ql09hs4cg0d0jfa31r01ql09hs4cgg";

export const fetchQuote = async (symbol: string) => {
  const result = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
  );
  return result.json;
};
