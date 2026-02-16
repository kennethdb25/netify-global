import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const content = {
    mission: {
      title: "Mission, Vision & Core Values",
      body: (
        <>
          <div className="space-y-8">
            {/* Vision Card */}
            <div
              className="group bg-gradient-to-br from-blue-50 to-purple-50 
      border border-blue-200/40 rounded-2xl p-6 shadow-md 
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl bg-blue-600 text-white 
          flex items-center justify-center shadow-lg group-hover:scale-110 transition"
                >
                  👁️
                </div>
                <h3 className="font-bold text-lg text-gray-800">Vision</h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                To be a leading and trusted IT solutions provider recognized for
                quality products, excellent technical services, and customer
                satisfaction.
              </p>
            </div>

            {/* Mission Card */}
            <div
              className="group bg-gradient-to-br from-purple-50 to-pink-50 
      border border-purple-200/40 rounded-2xl p-6 shadow-md 
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl bg-purple-600 text-white 
          flex items-center justify-center shadow-lg group-hover:scale-110 transition"
                >
                  🚀
                </div>
                <h3 className="font-bold text-lg text-gray-800">Mission</h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                To deliver reliable IT products and professional technical
                services while ensuring fair and competitive pricing, enabling
                clients to achieve optimal value and efficiency.
              </p>
            </div>

            {/* Core Values */}
            <div
              className="group bg-gradient-to-br from-amber-50 to-orange-50 
      border border-orange-200/40 rounded-2xl p-6 shadow-md 
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl bg-orange-500 text-white 
          flex items-center justify-center shadow-lg group-hover:scale-110 transition"
                >
                  ❤️
                </div>
                <h3 className="font-bold text-lg text-gray-800">Core Values</h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                {[
                  "Integrity – Conducting business with honesty and transparency",
                  "Quality – Delivering dependable products and high-standard services",
                  "Customer Focus – Prioritizing client needs and satisfaction",
                  "Innovation – Adapting to technological advancements",
                  "Professionalism – Maintaining competence and accountability",
                  "Value for Money – Ensuring affordability without sacrificing quality",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm
            hover:bg-orange-100 hover:scale-105 transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ),
    },
    business: {
      title: "Business Nature & Core Services",
      body: (
        <>
          <div className="space-y-10">
            {/* IT Products Card */}
            <div
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 
      border border-blue-200/40 rounded-3xl p-8 shadow-lg 
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl bg-blue-600 text-white 
          flex items-center justify-center shadow-md group-hover:scale-110 transition"
                >
                  💻
                </div>
                <h3 className="font-bold text-xl text-gray-800">
                  IT Products Trading & Distribution
                </h3>
              </div>

              <p className="text-gray-600 mb-5 leading-relaxed">
                Netify Global Trading Corporation supplies and distributes a
                wide range of IT products designed to support modern business
                and personal needs.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-4">
                {[
                  "Laptops & Notebooks",
                  "Desktop Computers",
                  "Peripherals",
                  "Networking Equipment",
                  "Computer Parts",
                  "Software Licenses",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm
            hover:bg-blue-100 hover:scale-105 transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 italic">
                Clients are assured of fair pricing based on market standards
                and product quality.
              </p>
              <br />
              <p className="text-gray-600 mb-5 leading-relaxed">
                For all IT products purchased from Netify Global Trading Corp.,
                including laptops and desktop computers, clients are assured of
                reasonable and fair pricing based on market standards, product
                quality, and supplier cost structure.
              </p>
            </div>

            {/* IT Services Card */}
            <div
              className="group bg-gradient-to-br from-emerald-50 to-teal-50 
      border border-emerald-200/40 rounded-3xl p-8 shadow-lg 
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl bg-emerald-600 text-white 
          flex items-center justify-center shadow-md group-hover:scale-110 transition"
                >
                  🛠️
                </div>
                <h3 className="font-bold text-xl text-gray-800">
                  IT Repair, Maintenance & Technical Services
                </h3>
              </div>

              <p className="text-gray-600 mb-5 leading-relaxed">
                To complement its product offerings, the company provides
                professional technical support services.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-4">
                {[
                  "Computer & Laptop Repair",
                  "System Diagnostics",
                  "Hardware Upgrades",
                  "Software Installation",
                  "Preventive Maintenance",
                  "On-site Corporate Support",
                  "IT Consultation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm
            hover:bg-emerald-100 hover:scale-105 transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 italic">
                This integrated model allows Netify to serve both product-based
                and service-based client needs effectively.
              </p>
            </div>
          </div>
        </>
      ),
    },

    target: {
      title: "Target Market",
      body: (
        <>
          <div className="space-y-8">
            {/* Intro */}
            <p className="text-gray-600 leading-relaxed">
              Netify Global Trading Corporation caters to a diverse client base,
              including:
            </p>

            {/* Market Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Small and medium enterprises (SMEs)", icon: "🏢" },
                { label: "Corporate Organizations", icon: "🏬" },
                { label: "Educational Institutions", icon: "🎓" },
                { label: "Government Offices", icon: "🏛️" },
                { label: "Retail Customers and Individual Users", icon: "🛒" },
                { label: "IT and Business Startups", icon: "🚀" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-4 text-center shadow-md
          border border-gray-200 hover:border-blue-400
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Closing */}
            <div
              className="bg-gradient-to-r from-blue-50 to-purple-50 
      rounded-xl p-4 border border-blue-200/40 shadow-sm"
            >
              <p className="text-gray-600 leading-relaxed text-center">
                The company is structured to serve both{" "}
                <span className="font-semibold text-gray-800">
                  bulk corporate buyers
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-800">
                  individual walk-in customers
                </span>{" "}
                requiring technical assistance.
              </p>
            </div>
          </div>
        </>
      ),
    },
  };

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
            Netify Global Trading Corporation is a newly established IT
            solutions provider specializing in the supply, distribution, and
            servicing of information technology products and systems. The
            company is formed to address the growing demand for reliable,
            high-quality, and cost-effective IT equipment and technical support
            for businesses, institutions, and individual consumers.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Netify Global Trading Corp. positions itself as a trusted partner in
            digital and technological enablement by offering not only IT
            hardware but also professional repair, maintenance, and technical
            services.
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
            className="bg-white rounded-3xl p-6 md:p-12 max-w-4xl w-full max-h-[calc(100vh-2rem)] overflow-y-auto relative shadow-2xl"
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
              Netify Global Trading Corporation
            </h3>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Mission */}
              <motion.div
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setActive("mission");
                  setOpen(true);
                }}
              >
                <img
                  src="https://img.icons8.com/color/96/000000/idea.png"
                  className="w-16 h-16 mb-2"
                  alt="Mission, Vision and Core Values"
                />
                <p className="text-gray-700 font-medium">
                  Mission, Vision and Core Values
                </p>
              </motion.div>

              {/* Business */}
              <motion.div
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setActive("business");
                  setOpen(true);
                }}
              >
                <img
                  src="https://img.icons8.com/color/96/000000/services.png"
                  className="w-16 h-16 mb-2"
                  alt="Business Nature and Core Services"
                />
                <p className="text-gray-700 font-medium">
                  Business Nature and Core Services
                </p>
              </motion.div>

              {/* Target */}
              <motion.div
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setActive("target");
                  setOpen(true);
                }}
              >
                <img
                  src="https://img.icons8.com/color/96/000000/groups.png"
                  className="w-16 h-16 mb-2"
                  alt="Target Market"
                />
                <p className="text-gray-700 font-medium">Target Market</p>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              Netify Global Trading Corporation is duly registered with the
              Securities and Exchange Commission (SEC) of the Republic of the
              Philippines. Established in 2026, the company’s primary purpose is
              the trade of IT products and the delivery of IT-related services,
              including repair, maintenance, and technical support.
            </p>
            <p className="text-gray-600 mb-4">
              To strengthen our market position, we operate alongside our
              subsidiary,
              <a
                href="https://www.emmcomputertrading.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline"
              >
                {` EM & M Computer Trading. `}
              </a>
              This strategic structure allows us to leverage a broad range of
              resources and expertise, ensuring clients receive comprehensive,
              integrated technology solutions across multiple platforms.
            </p>
            <p className="text-gray-600">
              Since its inception, Netify Global Trading Corp. has been
              committed to building a reputation for excellence by delivering
              reliable products and customer-centered solutions. Together with
              our subsidiary, we remain dedicated to driving digital innovation
              and providing superior technical support to our growing clientele.
            </p>

            <br />

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
              What Makes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Netify Different
              </span>
            </h2>

            {/* Intro */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Netify Global Trading Corp. stands out in the market because it
              does not operate purely as a seller of equipment. Instead, it
              builds relationships with its clients by offering:
            </p>

            {/* Bullet List */}
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>A combination of IT product supply and technical support</li>
              <li>Reliable after-sales service</li>
              <li>Skilled technicians who understand real-world IT problems</li>
              <li>
                Reasonable and market-aligned pricing for purchased IT products
              </li>
              <li>A practical, customer-first business approach</li>
            </ul>

            {/* Closing */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              This allows Netify to create{" "}
              <span className="font-semibold text-gray-800">
                long-term partnerships
              </span>{" "}
              rather than short-term transactions.
            </p>

            <br />

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
              Quality and Service Commitment
            </h2>

            {/* Intro */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Netify Global Trading Corporation is committed to delivering
              high-quality IT products and reliable technical services. The
              company ensures that all equipment supplied meets industry
              standards, and all repair and maintenance services are performed
              by trained and competent technicians.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              The company continuously strives to improve its processes,
              technical capabilities, and customer service to maintain
              excellence in all aspects of its operations.
            </p>

            <br />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
              Value to Clients
            </h2>

            {/* Intro */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Netify Global Trading Corporation provides its clients with
              dependable IT products, professional technical support, and fair
              pricing — enabling businesses and individuals to use technology
              more efficiently without excessive cost.
            </p>
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-xl font-bold mb-4">
                    {content[active]?.title}
                  </h2>

                  <div className="max-h-[60vh] overflow-y-auto">
                    {content[active]?.body}
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
