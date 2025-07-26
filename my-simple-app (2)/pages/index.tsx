// pages/index.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HomePage() {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [controls]);

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          🎬 Faith-Based AI Video Studio
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Create stunning Bible-inspired storyboards, motion videos, and AI-powered scenes—all in one platform.
        </p>

        <div className="mt-14">
          <Link href="/generate">
            <a>
                Start Creating
            </a>
          </Link>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">💳 Simple Pricing</h2>
          <div className="flex justify-center space-x-4 mb-6">
              className={`px-6 py-2 rounded-xl border ${plan === "monthly" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
              className={`px-6 py-2 rounded-xl border ${plan === "yearly" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setPlan("yearly")}
            >
              Yearly (Save 25%)
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">{plan === "monthly" ? "$49/month" : "$588/year"}</h3>
            <p className="text-sm text-gray-600 mb-4">Unlimited projects, narration, motion AI, and support.</p>
              Subscribe Now
          </div>
        </section>
      </motion.div>
    </main>
  );
}
