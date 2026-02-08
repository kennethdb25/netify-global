import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>

      <div className="relative h-[70vh] md:h-[90vh]">
        {/* Background image with slow zoom */}
        <motion.img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          alt="Desktop computer setup"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            className="text-white max-w-3xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Your One-Stop Tech Shop
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              From laptops and monitors to customized gaming computers and
              accessories—we provide solutions for work, play, and everything in
              between.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={"brands"}
                smooth={true}
                duration={600}
                offset={-80} // adjust for fixed navbar height
                className="cursor-pointer text-white-700 hover:text-blue-600 transition"
              >
                <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
                  Explore Products
                </button>
              </Link>
              <Link
                to={"contact"}
                smooth={true}
                duration={600}
                offset={-80} // adjust for fixed navbar height
                className="cursor-pointer text-white-700 hover:text-blue-600 transition"
              >
                <button className="px-8 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
