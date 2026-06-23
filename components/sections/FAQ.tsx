"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we get started?",
    answer: "Most facilities are up and running within 15 minutes. Our onboarding team helps you set up resident profiles and invite staff — no technical expertise required.",
  },
  {
    question: "Can families access updates from anywhere?",
    answer: "Yes. Family members can access CareConnect from anywhere in the world through the mobile app (iOS and Android) or any web browser. All they need is an internet connection.",
  },
  {
    question: "Is resident data secure?",
    answer: "Absolutely. All data is encrypted in transit and at rest, stored on servers located in India, and each facility's data is fully isolated. We follow HIPAA-aligned data security practices.",
  },
  {
    question: "Can we upload photos and videos?",
    answer: "Yes. Staff can attach photos to any activity log. Photos are stored securely in the cloud and made available to linked family members within 60 seconds of upload.",
  },
  {
    question: "Do you support multiple facilities?",
    answer: "Yes. Enterprise plan customers can manage multiple facilities under a single account with separate dashboards, staff, and resident data for each facility.",
  },
  {
    question: "Do family members need to pay?",
    answer: "No. Family member access is completely free. The subscription is paid by the facility, and they can invite unlimited family members per resident.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-gray-500"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
