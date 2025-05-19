import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-row gap-10 items-center">
      <Link to="/" className="block text-white hover:text-gray-300">
        Home
      </Link>

      <Link to="/calculator" className="block text-white hover:underline">
        CI-Calculator
      </Link>

      <Link
        to="/search"
        search={{ symbol: "" }}
        className="block text-white hover:underline"
      >
        Search stock
      </Link>

      <Link to="/about" className="block text-white hover:underline">
        About
      </Link>
    </nav>
  );
};
