"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle, Camera, Utensils, Bell, Pill } from "lucide-react";
import Button from "@/components/ui/Button";

const floatingCards = [
  { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: "Medication Administered", color: "border-emerald-200 bg-emerald-50", delay: 0 },
  { icon: <Camera className="w-4 h-4 text-blue-500" />, text: "Yoga Session Completed", color: "border-blue-200 bg-blue-50", delay: 0.3 },
  { icon: <Utensils className="w-4 h-4 text-amber-500" />, text: "Lunch Completed", color: "border-amber-200 bg-amber-50", delay: 0.6 },
  { icon: <Bell className="w-4 h-4 text-purple-500" />, text: "Family Notified", color: "border-purple-200 bg-purple-50", delay: 0.9 },
];

function StaffDashboardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-xs">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
        </div>
        <span className="text-white text-xs font-medium ml-1">Staff Dashboard</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Today's Tasks</span>
          <span className="text-xs text-blue-600 font-medium">8 pending</span>
        </div>
        {[
          { name: "Mr. Sharma", task: "Morning Medication", status: "done", time: "8:00 AM" },
          { name: "Mrs. Rao", task: "Yoga Session", status: "done", time: "9:30 AM" },
          { name: "Mr. Patel", task: "Lunch Check", status: "active", time: "12:00 PM" },
          { name: "Mrs. Nair", task: "BP Monitoring", status: "pending", time: "2:00 PM" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${
              i % 3 === 0 ? "bg-blue-500" : i % 3 === 1 ? "bg-teal-500" : "bg-purple-500"
            }`}>
              {item.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-gray-800 truncate">{item.name}</div>
              <div className="text-xs text-gray-500">{item.task}</div>
            </div>
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
              item.status === "done" ? "bg-emerald-400" :
              item.status === "active" ? "bg-blue-400 animate-pulse" : "bg-gray-300"
            }`} />
          </div>
        ))}
        <div className="pt-1">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Today's progress</span>
            <span>6/8 done</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FamilyAppMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-xs">
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
        </div>
        <span className="text-white text-xs font-medium ml-1">Family App — Mrs. Rao</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
            <Pill className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Medications taken ✓</div>
            <div className="text-xs text-gray-500">All 3 morning doses • 8:15 AM</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs">🧘</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Attended Yoga</div>
            <div className="text-xs text-gray-500">Active & happy • 9:30 AM</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
            <Utensils className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Had Lunch</div>
            <div className="text-xs text-gray-500">Full meal completed • 12:30 PM</div>
          </div>
        </div>
        <div className="p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100">
          <div className="text-xs font-semibold text-gray-800 mb-1">🤖 AI Daily Summary</div>
          <div className="text-xs text-gray-600 leading-relaxed">
            "Mrs. Rao had a great day — all medications taken, attended yoga, completed all meals..."
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50 to-teal-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Real-Time Senior Care Updates
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight text-balance"
            >
              Stay Connected to{" "}
              <span className="gradient-text">Every Resident's</span>{" "}
              Day
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              CareConnect enables retirement homes and assisted living facilities to instantly share
              updates, photos, medication records, and wellness information with family members —
              reducing anxiety and building trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" href="#pricing" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Book a Demo
              </Button>
              <Button variant="outline" size="lg" href="#features" leftIcon={<Play className="w-5 h-5" />}>
                Watch Product Tour
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex items-center gap-6 text-sm text-gray-500"
            >
              {["Free to start", "No credit card", "Setup in 15 min"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-teal-500" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Dashboard mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-start gap-4"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <StaffDashboardMockup />
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="mt-8"
            >
              <FamilyAppMockup />
            </motion.div>

            {/* Floating notification cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + card.delay, duration: 0.4 }}
                className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl border shadow-lg text-xs font-medium text-gray-700 ${card.color} ${
                  i === 0 ? "-top-4 left-4" :
                  i === 1 ? "top-1/4 -left-8" :
                  i === 2 ? "bottom-1/3 -right-4" :
                  "bottom-4 left-8"
                } z-10`}
              >
                {card.icon}
                {card.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
