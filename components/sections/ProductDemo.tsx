"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Monitor, LayoutDashboard, CheckCircle, Pill, Activity, Bell, TrendingUp } from "lucide-react";

type DemoTab = "family" | "staff" | "admin";

const tabs: { id: DemoTab; label: string; icon: React.ReactNode }[] = [
  { id: "family", label: "Family App", icon: <Smartphone className="w-4 h-4" /> },
  { id: "staff", label: "Staff App", icon: <Monitor className="w-4 h-4" /> },
  { id: "admin", label: "Admin Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
];

function FamilyPanel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-800">Mrs. Rao's Day — Today</h4>
        <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">All Good ✓</span>
      </div>
      {[
        { time: "8:15 AM", event: "Morning medications administered", type: "medication", icon: "💊" },
        { time: "9:30 AM", event: "Attended yoga session — active & cheerful", type: "activity", icon: "🧘" },
        { time: "12:30 PM", event: "Completed full lunch", type: "meal", icon: "🍽️" },
        { time: "2:00 PM", event: "BP: 124/82 • Pulse: 72 bpm • Mood: Happy", type: "health", icon: "❤️" },
        { time: "4:00 PM", event: "Enjoyed social activities with friends", type: "activity", icon: "👥" },
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
          <span className="text-lg">{item.icon}</span>
          <div>
            <div className="text-sm font-medium text-gray-800">{item.event}</div>
            <div className="text-xs text-gray-500 mt-0.5">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StaffPanel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-800">Today's Checklist</h4>
        <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">12 tasks</span>
      </div>
      {[
        { task: "Morning medications — all residents", done: true, count: "24/24" },
        { task: "Breakfast attendance check", done: true, count: "22/24" },
        { task: "Yoga session log + photos", done: true, count: "18/24" },
        { task: "Lunch attendance check", done: false, count: "0/24" },
        { task: "Afternoon vitals recording", done: false, count: "0/24" },
      ].map((item, i) => (
        <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${item.done ? "bg-emerald-50 border-emerald-100" : "bg-gray-50 border-gray-100"}`}>
          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-emerald-500" : "border-2 border-gray-300"}`}>
            {item.done && <CheckCircle className="w-3.5 h-3.5 text-white" />}
          </div>
          <span className={`flex-1 text-sm ${item.done ? "text-gray-600 line-through" : "text-gray-800 font-medium"}`}>{item.task}</span>
          <span className={`text-xs font-medium ${item.done ? "text-emerald-600" : "text-gray-400"}`}>{item.count}</span>
        </div>
      ))}
    </div>
  );
}

function AdminPanel() {
  const metrics = [
    { label: "Occupancy", value: "96%", change: "+2%", icon: <Activity className="w-4 h-4" />, color: "blue" },
    { label: "Med Compliance", value: "98%", change: "+1%", icon: <Pill className="w-4 h-4" />, color: "emerald" },
    { label: "Family Engagement", value: "89%", change: "+5%", icon: <Bell className="w-4 h-4" />, color: "purple" },
    { label: "Staff Response", value: "< 5min", change: "↓2min", icon: <TrendingUp className="w-4 h-4" />, color: "amber" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-800">Facility Overview — June 2026</h4>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {metrics.map((m, i) => (
          <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
              {m.icon}
              {m.label}
            </div>
            <div className="text-2xl font-bold text-gray-900">{m.value}</div>
            <div className="text-xs text-emerald-600 font-medium mt-1">{m.change} this week</div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
        <div className="text-xs text-gray-500 mb-2">Family satisfaction score</div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-11/12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
          </div>
          <span className="text-sm font-bold text-gray-800">4.8/5</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>("family");

  const panels = { family: <FamilyPanel />, staff: <StaffPanel />, admin: <AdminPanel /> };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Built for{" "}
            <span className="gradient-text">Staff, Families, and Administrators</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every role gets exactly what they need — nothing more, nothing less.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Tab bar */}
          <div className="flex gap-1 p-1 bg-gray-100 rounded-2xl mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-gray-500 ml-2">
                {tabs.find((t) => t.id === activeTab)?.label} — CareConnect
              </span>
            </div>
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {panels[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
