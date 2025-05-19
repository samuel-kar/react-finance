import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      navigate({ to: "/search", search: { symbol: input.toUpperCase() } });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        placeholder="Search for ticker (like MSFT)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Sök
      </button>
    </form>
  );
};
