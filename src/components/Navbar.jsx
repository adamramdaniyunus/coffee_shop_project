import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, UserCog } from "lucide-react"; // Lucide for icons

export default function Navbar() {
  return (
    <nav className="shadow-md sticky top-0 z-50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Hamburger */}
        <button className="text-primary">
          <Menu size={28} />
        </button>

        {/* Center: Logo */}
        <Link
          to="/"
          className="text-primary text-2xl font-bold tracking-wide"
        >
          CoffeeShop
        </Link>

        {/* Right: Cart */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-primary">
            <Search size={20} />
          </Link>
          <Link to="/cart" className="relative text-primary">
            <UserCog size={20} />
          </Link>
          <Link to="/cart" className="relative text-primary">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
