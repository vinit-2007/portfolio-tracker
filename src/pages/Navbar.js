
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Portfolio", path: "/" },
  { name: "Weather", path: "/weather" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#080b14]/90 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex justify-between items-center">

        {/* BRAND LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setMobileOpen(false)}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
            Vinit
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              .dev
            </span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}

          {/* RESUME CTA */}
          <a
            href="/resume.pdf"
            download
            className="ml-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase text-gray-950 bg-white hover:bg-cyan-300 transition-all duration-300 shadow-md"
          >
            Resume ↓
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c111e]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">

              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium py-1 transition ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <a
                href="/resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold text-gray-950 bg-white hover:bg-cyan-300 transition"
              >
                Download Resume ↓
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
