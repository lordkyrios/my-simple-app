// pages/LandingPage.tsx
import React from "react";
import { Button } from "./components/Button"; 
import { Card, CardContent } from "./components/Card"; //
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-4">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          🎬 Faith-Based AI Video Studio
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Create stunning Bible-inspired storyboards, motion videos, and AI-powered scenes—all in one platform.
        </p>
        <Button>Get Started</Button>
      </section>

      <section className="max-w-4xl mx-auto mt-20 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">📜 Script to Storyboard</h2>
            <p className="text-gray-600">
              Convert your message into cinematic, Bible-based visuals in minutes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">🎙️ Voice & Music Sync</h2>
            <p className="text-gray-600">
              Automatically generate AI voiceovers and music that match your message.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
