// pages/index.tsx
import Link from "next/link";
import { Button } from "@/components/Button";
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

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="📜 Script to Storyboard"
            description="Convert your message into cinematic scenes."
            href="/generate"
          />
          <FeatureCard
            title="📽️ Motion Image Generator"
            description="Upload an image and turn it into video magic."
            href="/motion"
          />
          <FeatureCard
            title="🎞️ YouTube Concept Copywriter"
            description="Paste a YouTube link and generate a unique version."
            href="/youtube-copywriter"
          />
          <FeatureCard
            title="🎤 AI Voice Narration"
            description="Auto-generate professional narration from your script."
            href="/voice"
          />
          <FeatureCard
            title="🎼 Music Matching"
            description="Match perfect music tracks to mood and tone."
            href="/music"
          />
          <FeatureCard
            title="📂 Project Dashboard"
            description="Save, organize and edit all your video drafts."
            href="/dashboard"
          />
        </div>

        <div className="mt-14">
          <Link href="/generate">
            <Button className="text-lg px-6 py-3">Start Creating</Button>
          </Link>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">✨ Why Creators Love Us</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <TestimonialCard
              quote="I created a full trailer for my youth ministry in minutes. Life-changing tool!"
              name="Pastor Daniel"
            />
            <TestimonialCard
              quote="This platform gave me everything I needed to bring my vision to life."
              name="Ava, Content Creator"
            />
            <TestimonialCard
              quote="Faith-based video tools like this just didn’t exist before."
              name="Lucas, Film Student"
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">💳 Simple Pricing</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <Button
              onClick={() => setPlan("monthly")}
              variant={plan === "monthly" ? "default" : "outline"}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setPlan("yearly")}
              variant={plan === "yearly" ? "default" : "outline"}
            >
              Yearly (Save 25%)
            </Button>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">
              {plan === "monthly" ? "$19/month" : "$171/year"}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Unlimited projects, narration, motion AI, and support.
            </p>
            <Button className="w-full">Subscribe Now</Button>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">📘 Feature Tour & Tutorials</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Explore our interactive tutorial mode or check the manual for prompt-based creation workflows.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/tutorial">
              <Button>🎥 Start Tutorial</Button>
            </Link>
            <Link href="/manual">
              <Button variant="outline">📘 View Manual</Button>
            </Link>
          </div>
        </section>
      </motion.div>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition text-left"
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </motion.div>
    </Link>
  );
}

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 shadow rounded-lg"
    >
      <p className="italic text-gray-700 mb-4">“{quote}”</p>
      <p className="font-semibold text-gray-900">— {name}</p>
    </motion.div>
  );
}
