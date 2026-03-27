import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Promos() {
  const [promos, setPromos] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedPromo, setSelectedPromo] = useState(null);

  // FETCH FROM GOOGLE SHEETS
  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1VraHzwB34maiIhVV-LNX8nFEFcl0zl7bAQd3iviURcU/Sheet1",
    )
      .then((res) => res.json())
      .then((data) => {
        const activePromos = data.filter((promo) => promo.active === "TRUE");

        setPromos(activePromos);
      })
      .catch((err) => console.error(err));
  }, []);

  if (promos.length === 0) {
    return <div className="text-center py-20">Loading promos...</div>;
  }

  const totalPages = promos.length;
  const promo = promos[page];

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold mb-16"
        >
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Promos
          </span>
        </motion.h2>

        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-20 
        bg-white/70 backdrop-blur-md shadow-xl rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-20 
        bg-white/70 backdrop-blur-md shadow-xl rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* CARD */}
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedPromo(promo)}
            className="cursor-pointer relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            {/* Background (fills space) */}
            <img
              src={promo.image}
              alt={promo.title}
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
            />

            {/* Main Image (no crop) */}
            <img
              src={promo.image}
              alt={promo.title}
              className="relative w-full h-[440px] object-contain z-10 transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20"></div>

            {/* Badge */}
            <div className="absolute top-4 left-4 z-30 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              PROMOTION
            </div>

            {/* Content */}
            <div className="absolute bottom-0 p-8 text-white z-30">
              <h3 className="text-3xl font-bold mb-2">{promo.title}</h3>
              <p className="text-sm text-gray-200 opacity-80 line-clamp-2">
                {promo.shortDescription || "Click to view promo details"}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 group-hover:gap-3 transition-all">
                View Details →
              </div>
            </div>
          </motion.div>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === page
                    ? "w-6 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="
        relative w-full 
        h-[92vh] sm:h-auto
        sm:max-w-2xl 
        bg-white shadow-2xl 
        rounded-t-3xl sm:rounded-3xl 
        overflow-hidden
      "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPromo(null)}
              className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            >
              ✕
            </button>

            {/* SCROLLABLE CONTAINER */}
            <div className="h-full overflow-y-auto">
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={selectedPromo.image}
                  alt={selectedPromo.title}
                  className="
              w-full 
              h-52 sm:h-72 
              object-cover
            "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-3xl font-bold drop-shadow-lg">
                    {selectedPromo.title}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-8 space-y-4 sm:space-y-5">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Promo Mechanics
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {selectedPromo.mechanics}
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Details
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {selectedPromo.details}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 sticky bottom-0 bg-white">
                  <a
                    href="https://www.facebook.com/messages/t/NetifyGlobalComputerStore"
                    target="_blank"
                    rel="noreferrer"
                    className="
                w-full sm:flex-1 
                bg-gradient-to-r from-blue-500 to-purple-500 
                text-white font-semibold 
                py-3 rounded-xl shadow-lg text-center 
                active:scale-[0.98] sm:hover:scale-[1.03] transition
              "
                  >
                    Inquire Now
                  </a>

                  <button
                    onClick={() => setSelectedPromo(null)}
                    className="
                w-full sm:flex-1 
                border border-gray-300 
                py-3 rounded-xl 
                active:scale-[0.98] sm:hover:bg-gray-100 transition
              "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
