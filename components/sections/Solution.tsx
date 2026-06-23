"use client";

import { motion } from "framer-motion";
import { Activity, Pill, Heart, Camera, MessageCircle, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Resident Timeline",
    description: "Real-time activity feed showing meals, exercises, social events, and daily routines as they happen.",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Medication Tracking",
    description: "Track every dose — administered, missed, or refused — with instant family notifications.",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health Monitoring",
    description: "Record vitals, mood, and health observations with trend graphs visible to families.",
    gradient: "from-red-500 to-rose-600",
    bg: "bg-red-50",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photo & Video Updates",
    description: "Share meaningful moments instantly — yoga, celebrations, meals, and daily life.",
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Family Messaging",
    description: "Secure direct messaging between families and staff. No more phone tag.",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Daily Summaries",
    description: "Automated evening summaries of each resident's day — activities, meals, and health — in plain English.",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            The Solution
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            One Platform Connecting{" "}
            <span className="gradient-text">Families and Care Providers</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything staff need to update families, and everything families need to feel at peace.
          </p>
        </motion.div>

        <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
