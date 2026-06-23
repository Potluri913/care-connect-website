"use client";

import { motion } from "framer-motion";
import { Users, Building2, AlertTriangle } from "lucide-react";

const familyProblems = [
  "No visibility into daily life",
  "Constant uncertainty & worry",
  "Delayed communication",
  "Living far from parents",
  "Missing important updates",
];

const facilityProblems = [
  "Repetitive phone calls all day",
  "Manual WhatsApp updates",
  "No structured communication system",
  "Time-consuming status reporting",
  "Growing family dissatisfaction",
];

const stats = [
  { value: "80%", label: "of family inquiries are routine status requests", color: "from-blue-500 to-blue-600" },
  { value: "3hrs", label: "daily staff time spent on repetitive family updates", color: "from-amber-500 to-orange-500" },
  { value: "94%", label: "of families want real-time visibility into their loved one's day", color: "from-teal-500 to-teal-600" },
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Families Worry.{" "}
            <span className="gradient-text">Staff Get Overwhelmed.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Family */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-blue-50 border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Family Challenges</h3>
            </div>
            <ul className="space-y-3">
              {familyProblems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <span className="text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Facility */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-amber-50 border border-amber-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Facility Challenges</h3>
            </div>
            <ul className="space-y-3">
              {facilityProblems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</span>
                  <span className="text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
