"use client";

import { motion } from "framer-motion";
import { ClipboardList, Zap, Bell } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Staff logs updates in seconds",
    description: "Staff tap to record meals, medications, activities, and photos directly from their phone. Each entry takes under 30 seconds.",
    icon: <ClipboardList className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "CareConnect organizes everything",
    description: "Updates are instantly structured into timelines, health reports, and medication records — no manual sorting required.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-teal-500 to-teal-600",
  },
  {
    number: "03",
    title: "Families get real-time updates",
    description: "Family members receive push notifications and can view a beautiful live timeline of their loved one's entire day.",
    icon: <Bell className="w-6 h-6" />,
    color: "from-purple-500 to-violet-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Up and running in{" "}
            <span className="gradient-text">three simple steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No complex setup. No training required. Start sharing updates today.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 border-t-2 border-dashed border-blue-200" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mx-auto`}>
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center shadow-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
