// components/Card.tsx
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 transition hover:shadow-md">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="text-gray-800">{children}</div>;
}
