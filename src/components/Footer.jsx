import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gray-900 text-white overflow-hidden py-16"
    >
      {/* Gradient Glow Background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Side: Address, Email, Phone */}
        <div className="text-left md:text-left space-y-8 flex-1">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text text-white">
            Netify Global Trading Corporation
          </h1>

          <div className="text-gray-400 text-sm space-y-4">
            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-500 mt-1" />
              <span>
                Unit 4 Villcrest Commercial Spot, Malhacan Rd, Meycuayan,
                Bulacan
              </span>
            </div>

            {/* Email */}
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-green-500 mt-1" />
              <span>
                <a
                  href="mailto:admin@emmcomputertrading.com"
                  className="hover:underline"
                >
                  admin@emmcomputertrading.com
                </a>{" "}
                |{" "}
                <a
                  href="mailto:purchasing@emmcomputertrading.com"
                  className="hover:underline"
                >
                  purchasing@emmcomputertrading.com
                </a>
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-purple-500 mt-1" />
              <span>
                <a href="tel:09623375119" className="hover:underline">
                  0962 337 5119
                </a>{" "}
                |{" "}
                <a href="tel:09055296388" className="hover:underline">
                  0905 529 6388
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Website Link */}
        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
          <div className="flex items-start gap-2">
            <Globe className="w-6 h-6 text-blue-400 mb-2" />
            <a
              href="https://www.emmcomputertrading.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white font-semibold text-sm transition-colors underline-offset-2 hover:underline"
            >
              www.emmcomputertrading.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center mt-12 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        © 2026 Netify Global Trading Corporation — All Rights Reserved
      </motion.div>
    </motion.footer>
  );
}
