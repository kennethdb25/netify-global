import { motion } from "framer-motion";
import { BsWindows } from "react-icons/bs";
import { FaMicrosoft } from "react-icons/fa6";
import { SiAdobe, SiLogitech, SiWesterndigital } from "react-icons/si";
import Ibm from "../Assets/Icons";

const brands = [
  { name: "HP", icon: "hp" },
  { name: "Lenovo", icon: "lenovo" },
  { name: "Apple", icon: "apple" },
  { name: "Dell", icon: "dell" },
  { name: "Asus", icon: "asus" },
  { name: "Acer", icon: "acer" },
  { name: "MSI", icon: "msi" },
  { name: "Samsung", icon: "samsung" },
  { name: "Razer", icon: "razer" },
  { name: "Fujitsu", icon: "fujitsu" },
  { name: "LG", icon: "lg" },
  { name: "Huawei", icon: "huawei" },
  { name: "Alien Ware", icon: "alienware" },
  { name: "Intel", icon: "intel" },
  { name: "Sony", icon: "sony" },
  { name: "Cisco", icon: "cisco" },
  { name: "TP-Link", icon: "tplink" },
  { name: "EPSON", icon: "epson" },
  { name: "Zebra Technologies", icon: "zebratechnologies" },
  { name: "AMD", icon: "amd" },
  { name: "Panasonic", icon: "panasonic" },
  { name: "Seagate", icon: "seagate" },
  { name: "JBL", icon: "jbl" },
  { name: "NVIDIA", icon: "nvidia" },
  { name: "Toshiba", icon: "toshiba" },
  { name: "Imou", icon: "imou" },
];

export default function Brands() {
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-6">
          <motion.div
            // key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 * 0.05, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
             flex flex-col items-center justify-center text-center bg-blue-100"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Logo */}
            <FaMicrosoft className="relative z-10 h-16 w-auto transition duration-500" />

            {/* Brand Name */}
            <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
              Microsoft
            </p>
          </motion.div>

          <motion.div
            // key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 2 * 0.05, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
             flex flex-col items-center justify-center text-center bg-blue-100"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Logo */}
            <SiAdobe className="relative z-10 h-16 w-auto transition duration-500" />

            {/* Brand Name */}
            <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
              Adobe
            </p>
          </motion.div>
          {brands.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
             flex flex-col items-center justify-center text-center bg-blue-100"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

              {/* Logo */}
              <img
                src={`https://cdn.simpleicons.org/${b.icon}`}
                alt={b.name}
                className="relative z-10 h-16 w-auto transition duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/180x100?text=Logo";
                }}
              />

              {/* Brand Name */}
              <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
                {b.name}
              </p>
            </motion.div>
          ))}
          <motion.div
            // key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 27 * 0.05, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
             flex flex-col items-center justify-center text-center bg-blue-100"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Logo */}
            <SiWesterndigital className="relative z-10 h-16 w-auto transition duration-500" />

            {/* Brand Name */}
            <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
              Western Digital
            </p>
          </motion.div>

          <motion.div
            // key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 28 * 0.05, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
             flex flex-col items-center justify-center text-center bg-blue-100"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Logo */}
            <BsWindows className="relative z-10 h-16 w-auto transition duration-500" />

            {/* Brand Name */}
            <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
              Windows
            </p>
          </motion.div>

          <motion.div
            // key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 31 * 0.05, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
             flex flex-col items-center justify-center text-center bg-blue-100"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Logo */}
            <SiLogitech className="relative z-10 h-16 w-auto transition duration-500" />

            {/* Brand Name */}
            <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
              Logitech
            </p>
          </motion.div>

          <motion.div
            // key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 32 * 0.05, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 
             flex flex-col items-center justify-center text-center bg-blue-100"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Logo */}
            <Ibm className="relative z-10 h-16 w-auto transition duration-500" />

            {/* Brand Name */}
            <p className="relative z-10 mt-3 font-semibold text-gray-700 text-sm tracking-wide">
              IBM
            </p>
          </motion.div>
          {/* // Philips Canon N-vision Transcend Eaton ConeEdge sharp tcl inplay benq gigabyte hikvision Viewsonic */}
        </div>
      </div>
    </section>
  );
}
