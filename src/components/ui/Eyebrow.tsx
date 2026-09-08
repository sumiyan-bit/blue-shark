import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-body text-xs font-medium uppercase tracking-[0.32em] ${
        tone === "light" ? "text-ocean" : "text-ocean-deep"
      }`}
    >
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </span>
  );
}
