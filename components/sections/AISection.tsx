"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, TrendingUp, MessageSquare, Shield } from "lucide-react";

const benefits = [
  { icon: <Clock className="w-5 h-5" />, label: "Saves staff time", desc: "Auto-generated every evening" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Consistent updates", desc: "Same quality every day" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "Better communication", desc: "Plain English summaries" },
  { icon: <Shield className="w-5 h-5" />, label: "Builds trust", desc: "Families feel informed" },
];

export default function AISection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />

      <div className="relative container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              AI-Powered Resident Summaries
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Every evening, CareConnect automatically generates a beautiful, plain-English summary of each resident's day — so families always feel informed.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur rounded-xl"
                >
                  <div className="text-teal-300 flex-shrink-0 mt-0.5">{b.icon}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{b.label}</div>
                    <div className="text-blue-200 text-xs mt-0.5">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — AI card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">AI Daily Summary</div>
                    <div className="text-xs text-gray-500">Generated at 8:00 PM</div>
                  </div>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium">Great Day ✓</span>
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Mrs. Rao — June 23, 2026</div>
                <p className="text-gray-800 leading-relaxed mb-6">
                  "Mrs. Rao had a wonderful day today. She attended the morning yoga session and appeared active and cheerful. All three morning medications were administered on time. She completed both lunch and dinner fully. Afternoon vitals were stable — BP 124/82, pulse 72 bpm, SpO₂ 98%, and mood recorded as Happy. She participated in music therapy and enjoyed social time with fellow residents."
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Meals", value: "3/3", color: "emerald" },
                    { label: "Medications", value: "3/3", color: "blue" },
                    { label: "Activities", value: "4", color: "purple" },
                  ].map((item, i) => (
                    <div key={i} className={`text-center p-3 rounded-xl bg-${item.color}-50`}>
                      <div className={`text-xl font-bold text-${item.color}-600`}>{item.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
