"use client";

import { motion } from "framer-motion";
import { CheckCircle, Utensils, Pill, Heart, MessageCircle } from "lucide-react";

const features = [
  {
    title: "Daily Activity Tracking",
    description: "Staff log every activity in seconds, so families know exactly how their loved one spent their day.",
    bullets: ["Breakfast, Lunch & Dinner", "Yoga, Walking & Games", "Social events & prayer sessions", "Doctor visits & physiotherapy", "Instant family notifications"],
    icon: <Utensils className="w-8 h-8 text-blue-600" />,
    bgColor: "bg-blue-50",
    accentColor: "bg-blue-100",
    illustration: (
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-blue-100">
        <div className="text-sm font-semibold text-gray-700 mb-4">Today's Activities — Mr. Sharma</div>
        {[
          { time: "8:00 AM", label: "Breakfast", icon: "🍳", done: true },
          { time: "9:30 AM", label: "Morning Walk", icon: "🚶", done: true },
          { time: "11:00 AM", label: "Yoga Session", icon: "🧘", done: true },
          { time: "12:30 PM", label: "Lunch", icon: "🍛", done: true },
          { time: "3:00 PM", label: "Games", icon: "🎲", done: false },
        ].map((a, i) => (
          <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl mb-2 ${a.done ? "bg-emerald-50" : "bg-gray-50"}`}>
            <span className="text-lg">{a.icon}</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">{a.label}</div>
              <div className="text-xs text-gray-500">{a.time}</div>
            </div>
            {a.done && <CheckCircle className="w-4 h-4 text-emerald-500" />}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Medication Compliance",
    description: "Never miss a dose. Track every medication with full compliance reporting and instant family alerts.",
    bullets: ["Record each administration", "Track missed or refused doses", "Instant family notifications", "7-day compliance trend charts", "Staff accountability logs"],
    icon: <Pill className="w-8 h-8 text-emerald-600" />,
    bgColor: "bg-emerald-50",
    accentColor: "bg-emerald-100",
    illustration: (
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-emerald-100">
        <div className="text-sm font-semibold text-gray-700 mb-4">Medication Schedule — Today</div>
        {[
          { med: "Metformin 500mg", time: "8:00 AM", status: "done" },
          { med: "Amlodipine 5mg", time: "8:00 AM", status: "done" },
          { med: "Vitamin D3", time: "8:00 AM", status: "done" },
          { med: "Atorvastatin 10mg", time: "9:00 PM", status: "pending" },
        ].map((m, i) => (
          <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl mb-2 ${m.status === "done" ? "bg-emerald-50" : "bg-amber-50"}`}>
            <Pill className={`w-4 h-4 ${m.status === "done" ? "text-emerald-500" : "text-amber-500"}`} />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">{m.med}</div>
              <div className="text-xs text-gray-500">{m.time}</div>
            </div>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${m.status === "done" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
              {m.status === "done" ? "Given" : "Pending"}
            </span>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Today's compliance</span>
            <span className="text-emerald-600 font-semibold">75%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full">
            <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Health Monitoring",
    description: "Track vitals, mood, and health trends over time. Automated alerts when readings are outside normal ranges.",
    bullets: ["Blood pressure & pulse", "Blood sugar & weight", "Oxygen saturation & temperature", "Mood tracking", "Trend graphs & reports"],
    icon: <Heart className="w-8 h-8 text-red-500" />,
    bgColor: "bg-red-50",
    accentColor: "bg-red-100",
    illustration: (
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-red-100">
        <div className="text-sm font-semibold text-gray-700 mb-4">Vitals — Today</div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Blood Pressure", value: "124/82", unit: "mmHg", color: "blue", icon: "🩺" },
            { label: "Pulse Rate", value: "72", unit: "bpm", color: "red", icon: "❤️" },
            { label: "SpO₂", value: "98", unit: "%", color: "teal", icon: "💨" },
            { label: "Blood Sugar", value: "112", unit: "mg/dL", color: "amber", icon: "🩸" },
          ].map((v, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-xl">
              <div className="text-lg mb-1">{v.icon}</div>
              <div className="text-lg font-bold text-gray-900">{v.value} <span className="text-xs text-gray-400 font-normal">{v.unit}</span></div>
              <div className="text-xs text-gray-500">{v.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-2.5 bg-emerald-50 rounded-xl flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
          <span className="text-xs text-emerald-700 font-medium">All vitals within normal range</span>
        </div>
      </div>
    ),
  },
  {
    title: "Family Communication",
    description: "A dedicated, secure channel between families and facility staff — no more phone calls or WhatsApp groups.",
    bullets: ["Direct messaging", "Broadcast announcements", "Visit scheduling", "Emergency alerts", "Staff response tracking"],
    icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
    bgColor: "bg-purple-50",
    accentColor: "bg-purple-100",
    illustration: (
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-purple-100">
        <div className="text-sm font-semibold text-gray-700 mb-4">Messages — Sharma Family</div>
        <div className="space-y-3">
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-xs">
              <p className="text-sm text-gray-800">How was dad's lunch today?</p>
              <p className="text-xs text-gray-400 mt-0.5">2:15 PM</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-xs">
              <p className="text-sm text-white">He had a full meal and even asked for seconds! 😊</p>
              <p className="text-xs text-blue-200 mt-0.5">2:17 PM • Staff Nurse Rekha</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-xs">
              <p className="text-sm text-gray-800">That's wonderful, thank you!</p>
              <p className="text-xs text-gray-400 mt-0.5">2:18 PM</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeatureBreakdown() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max space-y-24">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Content */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className={`w-14 h-14 rounded-2xl ${feature.accentColor} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustration */}
            <div className={`${feature.bgColor} rounded-3xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              {feature.illustration}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
