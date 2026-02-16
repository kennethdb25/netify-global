import { motion } from "framer-motion";
import { Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gray-900 text-white overflow-hidden py-16"
      >
        {/* Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* SUPPORT */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-gray-400 text-sm">(02) 7001-7051</p>
            <p className="text-gray-400 text-sm">
              0962 337 5119 | 0905 529 6388
            </p>
            <p className="text-gray-400 text-sm">
              admin@emmcomputertrading.com
            </p>

            <p className="text-gray-400 text-sm">
              purchasing@emmcomputertrading.com
            </p>
          </div>

          {/* COMPANY */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* LINKS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/NetifyGlobalComputerStore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/netify.globalcomputerstore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>Tiktok</li>
              <li>Youtube</li>
              <li>Lazada</li>
              <li>Shopee</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* WEBSITE */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Website</h3>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-5 h-5 text-blue-400" />
              <a
                href="https://www.emmcomputertrading.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                www.emmcomputertrading.com
              </a>
            </div>
            <h3 className="text-lg font-semibold">Our Location</h3>
            <div className="flex items-center gap-2 text-sm">
              <a
                href="https://www.google.com/maps/place/PXQ7%2B5G6,+151+Malhacan+Rd,+Meycauayan,+3020+Bulacan/@14.7378212,120.9633918,18.68z"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block group rounded-xl overflow-hidden shadow-lg w-full max-w-md"
              >
                <img
                  src="/assets/maps.png"
                  alt="Company Location Map"
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay only on the image */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center px-4">
                  <span className="text-white font-semibold text-sm leading-relaxed">
                    📍 Unit 4 Villcrest Commercial Spot, Malhacan Rd,
                    Meycauayan, Bulacan
                    <br />
                    <span className="text-blue-300 underline">
                      View on Google Maps
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center mt-12 text-gray-500 text-sm">
          © 2026 Netify Global Trading Corporation — All Rights Reserved
        </p>
      </motion.footer>

      {/* FLOATING CHATBOT */}
      <a
        href="https://www.facebook.com/messages/t/NetifyGlobalComputerStore"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:block font-semibold">Assistance</span>
        </div>
      </a>
    </>
  );
}
