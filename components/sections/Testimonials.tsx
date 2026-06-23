"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Family calls dropped by over 60% after implementing CareConnect. Our staff now focus on care, not phone updates.",
    name: "Priya Menon",
    role: "Facility Administrator",
    facility: "Sunshine Senior Living, Hyderabad",
    initials: "PM",
    color: "bg-blue-500",
    rating: 5,
  },
  {
    quote: "I finally feel connected to my mother despite living in Dubai. Seeing her yoga photos every morning is priceless.",
    name: "Rajesh Kumar",
    role: "Family Member",
    facility: "Son of resident, Bengaluru",
    initials: "RK",
    color: "bg-teal-500",
    rating: 5,
  },
  {
    quote: "CareConnect transformed our entire communication process. Families are happier and our staff are less stressed.",
    name: "Anita Sharma",
    role: "Operations Manager",
    facility: "Golden Years Retreat, Pune",
    initials: "AS",
    color: "bg-purple-500",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Loved by facilities and{" "}
            <span className="gradient-text">families across India</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                  <div className="text-xs text-blue-600">{t.facility}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
