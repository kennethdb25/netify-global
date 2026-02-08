import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="overflow-hidden rounded-2xl shadow-2xl group"
        >
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="About"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3">
            About us: Netify Global Trading Corporation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            We are a technology-driven company delivering reliable computer
            solutions, enterprise hardware, and innovative IT services for
            businesses and individuals.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Our mission is to empower people through cutting-edge technology,
            trusted partnerships, and world-class customer support.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full relative overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>

            {/* Header Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Company Banner"
              className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Title */}
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Detailed Company Profile
            </h3>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://icons8.com/icon/0dbdoPcVxc3N/technology"
                  alt="Tech Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-gray-700 font-medium">Innovative Tech</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://img.icons8.com/color/96/000000/handshake.png"
                  alt="Partnership Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-gray-700 font-medium">
                  Trusted Partnerships
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://img.icons8.com/color/96/000000/customer-support.png"
                  alt="Support Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-gray-700 font-medium">24/7 Support</p>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              Company Name has been a leader in technology solutions for over 10
              years. We provide reliable hardware, innovative IT services, and
              enterprise solutions that help businesses thrive.
            </p>
            <p className="text-gray-600 mb-4">
              Our dedicated team ensures exceptional customer support and
              tailored solutions for every client. Innovation, sustainability,
              and growth are our core values.
            </p>
            <p className="text-gray-600">
              Explore our projects, partners, and community initiatives through
              detailed reports and case studies.
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
