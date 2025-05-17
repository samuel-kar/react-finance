import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-row gap-10 items-center">
      <div>
        <Link to="/" className="block text-white hover:text-gray-300">
          Home
        </Link>
      </div>
      <div>
        <Link to="/calculator" className="block text-white hover:underline">
          Calculator
        </Link>
      </div>
      <div>
        <Link to="/search" className="block text-white hover:underline">
          Search stock
        </Link>
      </div>
      <div>
        <Link to="/about" className="block text-white hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};
