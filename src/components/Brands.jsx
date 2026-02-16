import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaMicrosoft } from "react-icons/fa6";
import { SiAdobe, SiLogitech } from "react-icons/si";

const brands = [
  { name: "Lenovo", icon: "lenovo" },
  { name: "HP", icon: "hp" },
  { name: "TP Link", icon: "tplink" },
  { name: "Dell", icon: "dell" },
  { name: "LG", icon: "lg" },
  { name: "Asus", icon: "asus" },
  { name: "Epson", icon: "epson" },
  { name: "Acer", icon: "acer" },
];

export default function Brands() {
  const ITEMS_DESKTOP = 18; // 6 x 3
  const ITEMS_MOBILE = 8; // 2 x 4

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_DESKTOP);

  useEffect(() => {
    const resize = () => {
      setItemsPerPage(window.innerWidth < 640 ? ITEMS_MOBILE : ITEMS_DESKTOP);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const allBrands = [
    {
      name: "Microsoft",
      icon: (
        <FaMicrosoft className="relative z-10 h-16 w-auto transition duration-500" />
      ),
    },
    {
      name: "Adobe",
      icon: (
        <SiAdobe className="relative z-10 h-16 w-auto transition duration-500" />
      ),
    },
    ...brands.map((b) => ({
      name: b.name,
      icon: (
        <img
          src={`https://cdn.simpleicons.org/${b.icon}`}
          alt={b.name}
          className="relative z-10 h-16 w-auto transition duration-500"
          onError={(e) =>
            (e.currentTarget.src =
              "https://via.placeholder.com/180x100?text=Logo")
          }
        />
      ),
    })),
    {
      name: "Logitech",
      icon: (
        <SiLogitech className="relative z-10 h-16 w-auto transition duration-500" />
      ),
    },
    {
      name: "Rapoo",
      icon: (
        <img
          src="/assets/rapoo.png"
          alt="Rapoo"
          className="relative z-10 h-16 w-auto transition duration-500"
        />
      ),
    },
    {
      name: "Canon",
      icon: (
        <img
          src="/assets/canon.png"
          alt="Canon"
          className="relative z-10 h-16 w-auto transition duration-500"
        />
      ),
    },
    {
      name: "AOC",
      icon: (
        <img
          src="/assets/aoc.png"
          alt="AOC"
          className="relative z-10 h-16 w-auto transition duration-500"
        />
      ),
    },
    {
      name: "Philips",
      icon: (
        <img
          src="/assets/philips.png"
          alt="Philips"
          className="relative z-10 h-16 w-auto transition duration-500"
        />
      ),
    },
    {
      name: "N-Vision",
      icon: (
        <img
          src="/assets/nvision.png"
          alt="N-Vision"
          className="relative z-10 h-16 w-auto transition duration-500"
        />
      ),
    },
    {
      name: "INPLAY",
      icon: (
        <img
          src="/assets/inplay.png"
          alt="INPLAY"
          className="relative z-10 h-16 w-auto transition duration-500"
        />
      ),
    },
    {
      name: "BENQ",
      icon: (
        <img
          src="/assets/benq.png"
          alt="BENQ"
          className="relative z-10 h-16 w-auto transition duration-500"
        />
      ),
    },
  ];

  const totalPages = Math.ceil(allBrands.length / itemsPerPage);

  const visibleBrands = allBrands.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  return (
    <section
      id="brands"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center text-4xl font-extrabold mb-14"
        >
          Your Global{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Tech Partner
          </span>
        </motion.h2>

        <div className="relative">
          {/* LEFT */}
          <button
            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 
            bg-white/80 hover:bg-white shadow-xl rounded-full p-3"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* RIGHT */}
          <button
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 
            bg-white/80 hover:bg-white shadow-xl rounded-full p-3"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <motion.div
            key={page}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              grid gap-6 max-w-7xl mx-auto px-6
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
            "
          >
            {visibleBrands.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
                flex flex-col items-center justify-center text-center bg-blue-100"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                {b.icon}

                <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
                  {b.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
