/src/components/LandingPage.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Welcome to <span className="text-blue-600">YourApp</span>
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Build beautiful, fast, and modern apps with ease. Start crafting your next big idea today.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="px-6">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="px-6">
            Learn More
          </Button>
        </div>
      </div>

      <section className="mt-20 w-full max-w-5xl px-4 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="rounded-2xl shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

const features = [
  {
    title: "Component-First Design",
    description: "Reusable UI components built for speed and consistency.",
    icon: ArrowRight,
  },
  {
    title: "TypeScript Support",
    description: "Robust typing and autocompletion to prevent runtime bugs.",
    icon: ArrowRight,
  },
  {
    title: "Tailwind + shadcn/ui",
    description: "Fully responsive design system with modern utilities.",
    icon: ArrowRight,
  },
];

