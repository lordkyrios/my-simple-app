
import { useEffect, useState } from "react";
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
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Create stunning Bible-inspired storyboards, motion videos, and AI-powered scenes—all in one platform.
        </p>

        <div className="inline-flex items-center space-x-2 mb-8">
          <span className="text-gray-500">Billing:</span>
          <button
            onClick={() => setPlan("monthly")}
            className={`px-4 py-2 rounded-l ${plan === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPlan("yearly")}
            className={`px-4 py-2 rounded-r ${plan === "yearly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Yearly
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 justify-center items-start">
          <div className="border p-6 rounded-xl shadow bg-white">
            <h2 className="text-2xl font-bold mb-4">Creator Plan</h2>
            <p className="text-gray-600 mb-4">Perfect for YouTubers & creators</p>
            <p className="text-3xl font-bold mb-6">
              {plan === "monthly" ? "$15/mo" : "$120/yr"}
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Motion Storyboards</li>
              <li>Text-to-Video Generator</li>
              <li>AI Voice Narration</li>
              <li>SEO Title & Thumbnail</li>
              <li>YouTube Uploader</li>
            </ul>
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
              Start Free Trial
            </a>
          </div>

          <div className="border p-6 rounded-xl shadow bg-white">
            <h2 className="text-2xl font-bold mb-4">Studio Plan</h2>
            <p className="text-gray-600 mb-4">For production teams & ministries</p>
            <p className="text-3xl font-bold mb-6">
              {plan === "monthly" ? "$39/mo" : "$299/yr"}
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Everything in Creator</li>
              <li>Team Collaboration</li>
              <li>Multi-language Voiceovers</li>
              <li>PDF Storyboard Export</li>
              <li>Priority Support</li>
            </ul>
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
              Subscribe Now
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
