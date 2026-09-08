import { Award, Star, Bike } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { siteConfig } from "../data/siteConfig";

const items = [
  {
    icon: Award,
    title: "20+ anos de experiência",
    subtitle: "Chef Nilson Pires",
  },
  {
    icon: Star,
    title: `${siteConfig.rating.value} no Google`,
    subtitle: `${siteConfig.rating.count} avaliações`,
  },
  {
    icon: Bike,
    title: "Delivery",
    subtitle: "Peça e receba em casa",
  },
];

export function Highlights() {
  return (
    <section className="border-y border-white/5 bg-ink-2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden bg-white/5 sm:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="bg-ink-2">
            <div className="flex h-full flex-col items-start gap-4 px-6 py-10 lg:px-10">
              <item.icon className="text-ocean" size={26} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <p className="font-display text-lg text-paper">{item.title}</p>
                <p className="mt-1 font-body text-sm text-paper/60">{item.subtitle}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
