import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gray-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto z-10"
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Get In Touch
        </h2>

        <form className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-10 space-y-6">
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#6366F1" }}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none transition duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Full Name"
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#6366F1" }}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none transition duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Email"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: "#6366F1" }}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none transition duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Your Message"
            rows="5"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:from-blue-600 hover:to-purple-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
