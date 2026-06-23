"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Zap, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { calculateMonthlyPrice, formatIndianCurrency } from "@/lib/utils";

const starterFeatures = [
  "Up to 10 residents",
  "Resident profiles",
  "Activity updates & feed",
  "Photo uploads",
  "Family app access",
  "Push notifications",
];

const growthFeatures = [
  "Up to 50 residents",
  "Everything in Starter",
  "Medication tracking",
  "Health logs & vitals",
  "Family messaging",
  "Admin dashboard",
  "Reports & exports",
];

const enterpriseFeatures = [
  "Unlimited residents",
  "Unlimited staff accounts",
  "Unlimited family accounts",
  "AI daily summaries",
  "White-label branding",
  "Advanced analytics",
  "Multi-facility management",
  "API integrations",
  "Priority support (24/7)",
];

function PricingCalculator() {
  const [residents, setResidents] = useState(100);
  const monthly = calculateMonthlyPrice(residents);

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100">
      <div className="text-center mb-4">
        <div className="text-sm font-semibold text-gray-600 mb-1">Additional Residents Calculator</div>
        <div className="text-xs text-gray-500">₹1,500/month per 50 additional residents on Growth plan</div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Residents</span>
          <span className="font-bold text-blue-700">{residents}</span>
        </div>
        <input
          type="range"
          min={50}
          max={500}
          step={50}
          value={residents}
          onChange={(e) => setResidents(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
          aria-label="Number of residents"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>50</span>
          <span>500</span>
        </div>
      </div>

      <div className="text-center">
        <div className="text-3xl font-extrabold text-gray-900">
          ₹{formatIndianCurrency(monthly)}
          <span className="text-lg font-normal text-gray-500">/month</span>
        </div>
        {residents > 50 && (
          <div className="text-xs text-gray-500 mt-1">
            ₹5,000 base + ₹{formatIndianCurrency(monthly - 5000)} additional
          </div>
        )}
      </div>

      {/* Examples */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[50, 150, 300].map((n) => (
          <button
            key={n}
            onClick={() => setResidents(n)}
            className={`text-xs py-1.5 px-2 rounded-lg font-medium transition-all ${
              residents === n
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-blue-50"
            }`}
          >
            {n} → ₹{formatIndianCurrency(calculateMonthlyPrice(n))}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Simple Pricing for Every{" "}
            <span className="gradient-text">Senior Care Facility</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                <span className="text-lg">🌱</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Starter</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹0</span>
              <span className="text-gray-500 text-sm ml-1">/month</span>
              <div className="text-sm text-gray-500 mt-1">Up to 10 residents</div>
            </div>
            <Button variant="outline" size="md" href="#" className="w-full mb-6">
              Start Free
            </Button>
            <ul className="space-y-3">
              {starterFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-white rounded-2xl border-2 border-blue-500 p-8 shadow-xl"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                <Zap className="w-3.5 h-3.5" />
                Most Popular
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4 mt-2">
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Growth</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹5,000</span>
              <span className="text-gray-500 text-sm ml-1">/month</span>
              <div className="text-sm text-gray-500 mt-1">Up to 50 residents</div>
            </div>
            <Button variant="primary" size="md" href="#" className="w-full mb-6">
              Book Demo
            </Button>
            <ul className="space-y-3">
              {growthFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <PricingCalculator />
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 rounded-2xl border border-gray-700 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gray-700 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-lg font-bold text-white">Enterprise</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">₹20,000</span>
              <span className="text-gray-400 text-sm ml-1">/month</span>
              <div className="text-sm text-gray-400 mt-1">Unlimited residents</div>
            </div>
            <Button variant="white" size="md" href="#" className="w-full mb-6">
              Contact Sales
            </Button>
            <ul className="space-y-3">
              {enterpriseFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
