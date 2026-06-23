"use client";

import { motion } from "framer-motion";

const facilities = [
  "Retirement Communities",
  "Assisted Living Centers",
  "Senior Care Facilities",
  "Dementia Care Centers",
  "Elder Care Homes",
  "Senior Living Communities",
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 font-medium mb-8"
        >
          Trusted by senior care providers to improve family communication
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          {facilities.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
              <span className="text-sm font-medium text-gray-700">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
