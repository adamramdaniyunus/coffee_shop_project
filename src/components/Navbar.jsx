import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, UserCog } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="shadow-md sticky top-0 z-50 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left: Logo + Menu (mobile) */}
          <div className="flex items-center gap-4">
            <button onClick={toggleMenu} className="md:hidden text-primary">
              <Menu size={28} />
            </button>
            <Link to="/" className="text-primary text-2xl font-bold tracking-wide font-main">
              CS
            </Link>
          </div>

          {/* Middle: Desktop Menu */}
          <div className="hidden md:flex gap-8 text-primary text-md font-medium">
            <ScrollLink to="hero" smooth duration={500} className="hover:underline cursor-pointer text-primary">Home</ScrollLink>
            <ScrollLink to="product-list" smooth duration={500} className="hover:underline cursor-pointer text-primary">Products</ScrollLink>
            <ScrollLink to="about" smooth duration={500} className="hover:underline cursor-pointer text-primary">About</ScrollLink>
            <ScrollLink to="articles-footer" smooth duration={500} className="hover:underline cursor-pointer text-primary">Contact</ScrollLink>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <Link to="/search" className="text-primary">
              <Search size={20} />
            </Link>
            <Link to="/account" className="text-primary">
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 p-6 md:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween" }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-primary">Menu</h2>
                <button onClick={closeMenu}>
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <ScrollLink onClick={closeMenu} to="hero" smooth duration={500} className="hover:underline cursor-pointer text-primary">Home</ScrollLink>
                <ScrollLink onClick={closeMenu} to="product-list" smooth duration={500} className="hover:underline cursor-pointer text-primary">Products</ScrollLink>
                <ScrollLink onClick={closeMenu} to="about" smooth duration={500} className="hover:underline cursor-pointer text-primary">About</ScrollLink>
                <ScrollLink onClick={closeMenu} to="articles-footer" smooth duration={500} className="hover:underline cursor-pointer text-primary">Contact</ScrollLink>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
