import { useState } from "react";
import { monthlyCompoundInterestCalculator } from "../utils/api";

export const Savingcalculator = () => {
  const [startValue, setStartValue] = useState(0);
  const [monthlyInput, setMonthlyInput] = useState(1000);
  const [annualRate, setAnnualRate] = useState(10);
  const [years, setYears] = useState(10);

  const result = monthlyCompoundInterestCalculator(
    startValue,
    annualRate,
    years,
    monthlyInput
  );

  return (
    <div className="bg-gray-200 rounded-xl p-6 shadow-md max-w-md w-full">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          Compound Interest Calculator
        </h1>
        <div className="mb-4">
          <label className="block mb-2">Start Value:</label>
          <input
            type="number"
            value={startValue}
            onChange={(e) => setStartValue(Number(e.target.value))}
            className="border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Monthly Input:</label>
          <input
            type="number"
            value={monthlyInput}
            onChange={(e) => setMonthlyInput(Number(e.target.value))}
            className="border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Annual Growth Rate (%):</label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
            className="border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Years:</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="border p-2"
          />
        </div>
        <h2 className="text-xl font-bold">Result: {result.toFixed(2)}$</h2>
      </div>
    </div>
  );
};
