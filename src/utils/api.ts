const API_URL = "https://finnhub.io/api/v1/";

const API_KEY = "d0jfa31r01ql09hs4cg0d0jfa31r01ql09hs4cgg";

export const fetchQuote = async (symbol: string) => {
  const result = await fetch(
    `${API_URL}quote?symbol=${symbol}&token=${API_KEY}`
  );
  return result.json();
};

export const monthlyCompoundInterestCalculator = (
  startValue: number,
  annualRate: number,
  years: number,
  monthlyInput: number
): number => {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  return (
    startValue * Math.pow(1 + monthlyRate, months) +
    (monthlyInput * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate
  );
};
