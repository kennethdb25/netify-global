import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["home", "about", "brands", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="font-bold text-gray-900 text-lg">
          Netify Global Trading Corporation
        </h1>

        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {menu.map((m) => (
            <li key={m} className="relative group">
              <Link
                to={m}
                smooth
                offset={-70}
                className="cursor-pointer hover:text-blue-600"
              >
                {m.toUpperCase()}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3">
          {menu.map((m) => (
            <Link
              key={m}
              to={m}
              smooth
              offset={-70}
              onClick={() => setOpen(false)}
              className="block"
            >
              {m.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
