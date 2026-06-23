"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Join 500+ facilities already using CareConnect
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 text-balance">
            Bring Families Closer to
            <br />
            Their Loved Ones
          </h2>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Transform communication, increase transparency, and build trust with every family — starting today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg" href="#pricing" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Book a Demo
            </Button>
            <Button
              size="lg"
              href="#pricing"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-xl px-7 py-3.5 font-semibold transition-all"
            >
              Start Free Trial
            </Button>
          </div>

          <p className="mt-6 text-blue-200 text-sm">
            Free plan available • No credit card required • Setup in 15 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
