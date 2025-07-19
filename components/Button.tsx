type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  className?: string;
};

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const baseStyles = "rounded-xl px-4 py-2 text-white font-semibold transition";
  const style = variant === "outline"
    ? "bg-white border border-gray-400 text-gray-800 hover:bg-gray-100"
    : "bg-blue-600 hover:bg-blue-700";

  return (
    <button className={`${baseStyles} ${style} ${className}`} {...props} />
  );
}
