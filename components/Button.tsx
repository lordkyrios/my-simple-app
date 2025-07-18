// components/Button.tsx

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "px-4 py-2 text-white font-semibold rounded-xl transition";
    const variants = {
      default: "bg-blue-600 hover:bg-blue-700",
      outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
