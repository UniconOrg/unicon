import { ArrowRight, Plus } from "lucide-react";

type CTAButtonProps = {
  children: React.ReactNode;
  icon?: "arrow" | "plus";
  variant?: "light" | "dark";
  onClick?: () => void;
  className?: string;
};

export default function CTAButton({
  children,
  icon = "arrow",
  variant = "light",
  onClick,
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-4 rounded-full py-2 pl-6 pr-2 text-xl font-normal transition";

  const variantStyles =
    variant === "light"
      ? "bg-white/90 text-[#1A1D3B] hover:bg-white"
      : "bg-[#788BCE]/20 text-white hover:bg-[#788BCE]/30";

  const Icon = icon === "arrow" ? ArrowRight : Plus;

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick}>
      {children}
      <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#788BCE] hover:bg-[#2563eb] transition">
        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
      </span>
    </button>
  );
}

