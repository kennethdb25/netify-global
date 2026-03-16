import { motion } from "framer-motion";
import { Globe, MessageCircle } from "lucide-react";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <section id="contact" className="relative pt-20 overflow-hidden">
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gray-900 text-white overflow-hidden py-16"
        >
          {/* Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* COMPANY */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <Link to="about" smooth offset={-80}>
                  <li className="cursor-pointer hover:text-blue-400 transition">
                    About
                  </li>
                </Link>
                <li className="hover:text-blue-400 transition cursor-pointer">
                  Terms & Condition
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* LINKS */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-blue-400 transition">
                  <a
                    href="https://www.facebook.com/NetifyGlobalComputerStore/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li className="hover:text-pink-400 transition">
                  <a
                    href="https://www.instagram.com/netify.globalcomputerstore/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="hover:text-red-500 transition cursor-pointer">
                  Tiktok
                </li>
                <li className="hover:text-red-700 transition cursor-pointer">
                  Youtube
                </li>
                <li className="hover:text-orange-400 transition cursor-pointer">
                  Lazada
                </li>
                <li className="hover:text-orange-600 transition cursor-pointer">
                  Shopee
                </li>
                <li className="hover:text-blue-500 transition cursor-pointer">
                  LinkedIn
                </li>
              </ul>
            </div>
            {/* SUPPORT */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Support</h3>

              {/* Phone Numbers */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition cursor-pointer">
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.5A2.5 2.5 0 015.5 3h1A2.5 2.5 0 019 5.5v1A2.5 2.5 0 016.5 9H5A2.5 2.5 0 013 6.5v-1zM9 15.5A2.5 2.5 0 0111.5 13h1a2.5 2.5 0 012.5 2.5v1a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 019 16.5v-1z"
                    />
                  </svg>
                  <span>+63 905 529 6388 | +63 917 851 6689</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.5A2.5 2.5 0 015.5 3h1A2.5 2.5 0 019 5.5v1A2.5 2.5 0 016.5 9H5A2.5 2.5 0 013 6.5v-1zM9 15.5A2.5 2.5 0 0111.5 13h1a2.5 2.5 0 012.5 2.5v1a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 019 16.5v-1z"
                    />
                  </svg>
                  <span>+63 962 337 5119 | +63 96 615 4663</span>
                </div>
              </div>

              {/* Emails */}
              <div className="space-y-1">
                {[
                  "admin.emmalyn@netifyglobaltrading.com",
                  "marketing.aldrin@netifyglobaltrading.com",
                  "support.mike@netifyglobaltrading.com",
                ].map((email) => (
                  <div
                    key={email}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition cursor-pointer"
                  >
                    {/* Email Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{email}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WEBSITE & LOCATION */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Website</h3>
              <div className="flex items-center gap-2 text-sm text-blue-400 hover:underline cursor-pointer">
                <Globe className="w-5 h-5" />
                <a
                  href="https://www.emmcomputertrading.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.emmcomputertrading.com
                </a>
              </div>

              <h3 className="text-lg font-semibold text-white">Our Location</h3>
              <a
                href="https://maps.app.goo.gl/m9wfWdHbUhCbGc1K8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block group rounded-xl overflow-hidden shadow-lg w-full max-w-md"
              >
                <img
                  src="/assets/maps.png"
                  alt="Company Location Map"
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
      </section>
    </>
  );
}
