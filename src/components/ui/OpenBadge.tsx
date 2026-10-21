import { useEffect, useState } from "react";
import { getOpenStatus } from "../../data/openingHours";

const LABELS = {
  open: "Aberto agora · até 23h",
  "opens-today": "Abre hoje às 18h",
  closed: "Fechado agora",
};

export function OpenBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [status, setStatus] = useState(getOpenStatus);

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  const text = tone === "light" ? "text-paper/85" : "text-ink/75";
  const dot =
    status === "open"
      ? "bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/70"
      : status === "opens-today"
        ? "bg-amber-400"
        : "bg-shu";

  return (
    <span className={`inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-[0.2em] ${text}`}>
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot}`} />
      {LABELS[status]}
    </span>
  );
}
