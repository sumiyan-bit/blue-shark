import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { menuData, featuredItems, formatPrice } from "../data/menuData";
import { images } from "../data/images";

const showcaseCategories = [
  { id: "sashimis", label: "Sashimis", cover: images.menuCategoryCovers.sashimis },
  { id: "niguiris", label: "Niguiris", cover: images.menuCategoryCovers.niguiris },
  { id: "uramakis", label: "Uramakis", cover: images.menuCategoryCovers.uramakis },
  { id: "hossomaki", label: "Hossomaki", cover: images.menuCategoryCovers.hossomaki },
  { id: "temakis", label: "Temakis", cover: images.menuCategoryCovers.temakis },
  { id: "especiais", label: "Especiais", cover: images.menuCategoryCovers.especiais },
  { id: "combinados", label: "Combinados", cover: images.menuCategoryCovers.combinados },
  { id: "quentes", label: "Pratos Quentes", cover: images.menuCategoryCovers.quentes },
];

export function Menu() {
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  function openCategory(id: string) {
    setActiveCategory(id);
    setFullMenuOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("cardapio-completo")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const active = menuData.find((c) => c.id === activeCategory) ?? menuData[0];

  return (
    <section id="cardapio" className="scroll-mt-24 bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">Cardápio</Eyebrow>
          <h2 className="text-balance mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Destaques do Blue Shark
          </h2>
          <p className="mt-5 font-body text-base text-ink/70">
            Um recorte das preparações mais procuradas do Blue Shark, com destaque para as
            opções com barriga de salmão, sempre elogiadas por quem já provou.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.07}>
              <article className="group flex h-full flex-col justify-between border border-ink/10 bg-white/40 p-7 transition-colors hover:border-ocean-deep/40">
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.25em] text-ocean-deep">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-snug">{item.name}</h3>
                  {item.description && (
                    <p className="mt-2 font-body text-sm text-ink/60">{item.description}</p>
                  )}
                </div>
                <p className="mt-6 font-body text-lg font-medium text-ocean-deep">
                  {formatPrice(item.price)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20">
          <h3 className="font-display text-2xl">Explore o Cardápio</h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {showcaseCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => openCategory(cat.id)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm"
              >
                <img
                  src={cat.cover}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute bottom-4 left-4 font-display text-base text-paper sm:text-lg">
                  {cat.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setFullMenuOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:border-ocean-deep hover:text-ocean-deep"
          >
            Ver Cardápio Completo
            <ChevronDown
              size={16}
              className={`transition-transform ${fullMenuOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {fullMenuOpen && (
          <div id="cardapio-completo" className="mt-16 scroll-mt-28">
            <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-6">
              {menuData.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 font-body text-xs font-medium uppercase tracking-wider transition-colors ${
                    activeCategory === cat.id
                      ? "bg-ink text-paper"
                      : "bg-ink/5 text-ink/60 hover:bg-ink/10"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-display text-2xl">{active.title}</h4>
                {active.note && (
                  <span className="font-body text-xs uppercase tracking-wider text-ink/50">
                    {active.note}
                  </span>
                )}
              </div>

              <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {active.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4">
                    <div>
                      <p className="font-body text-sm font-medium text-ink">{item.name}</p>
                      {item.description && (
                        <p className="mt-1 font-body text-xs text-ink/55">{item.description}</p>
                      )}
                    </div>
                    <p className="whitespace-nowrap font-body text-sm font-medium text-ocean-deep">
                      {formatPrice(item.price)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
