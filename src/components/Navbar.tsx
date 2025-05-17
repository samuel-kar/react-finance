import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/" className="text-white hover:text-gray-300">
        Home
      </Link>
      <Link to="/calculator" className="text-white hover:underline">
        Calculator
      </Link>
      <Link to="/search" className="text-white hover:underline">
        Search stock
      </Link>
      <Link to="/about" className="text-white hover:underline">
        About
      </Link>
    </nav>
  );
};
