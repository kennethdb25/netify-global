import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = ["home", "about", "brands", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-lg"
    >
      {/* Glow line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Brand */}
        <h1 className="font-extrabold text-lg md:text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text tracking-wide">
          Netify Global Trading Corporation
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-semibold text-gray-800">
          {menu.map((m) => (
            <li key={m} className="relative group">
              <Link
                to={m}
                smooth
                offset={-80}
                className="cursor-pointer transition hover:text-blue-600"
              >
                {m.toUpperCase()}
                <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full group-hover:left-0" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-white/60 backdrop-blur shadow hover:scale-105 transition"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-xl bg-white/80 border-t border-white/40 shadow-xl"
          >
            <div className="px-6 py-6 space-y-4 text-sm font-semibold text-gray-800">
              {menu.map((m) => (
                <Link
                  key={m}
                  to={m}
                  smooth
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition"
                >
                  {m.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
