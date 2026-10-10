import { useState } from "react";
import logo from "../assets/logo-text.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          )}
        </button>

        {/* Brand Logo */}
        <a
  href="#home"
  className="flex items-center md:mr-8"
  aria-label="Dev Stack Home"
>
  <img
    src={logo}
    alt="Dev Stack"
    className="h-auto w-28 object-contain sm:w-32"
  />
</a>

        {/* Desktop Navigation Links */}
        <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs transition-colors duration-200 hover:text-pink-500 ${
                link.name === "Home"
                  ? "font-semibold text-pink-500"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-xs text-gray-700 transition-colors hover:text-pink-500"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm transition-colors hover:text-pink-500 ${
                link.name === "Home"
                  ? "font-semibold text-pink-500"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
