import { Star, Quote } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { siteConfig } from "../data/siteConfig";

const testimonials = [
  {
    name: "Alessandro S. C.",
    quote: "Os destaques vão para as opções com barriga de salmão, são bons demais.",
  },
  {
    name: "Eder Freitas",
    quote: "Restaurante com comida muito boa e bom atendimento e tem um preço justo.",
  },
  {
    name: "Renato Ferreira",
    quote: "Comida maravilhosa, a melhor comida japonesa de São Paulo, agora em Sorocaba.",
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-24 bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Avaliações</Eyebrow>
          <h2 className="text-balance mt-5 font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
            Quem conhece, recomenda.
          </h2>

          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="font-display text-5xl text-paper">{siteConfig.rating.value}</span>
            <div className="flex gap-1 text-ocean-light" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-paper/60">
              {siteConfig.rating.count} avaliações no Google
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between border border-white/10 bg-ink-2 p-8">
                <div>
                  <Quote className="text-ocean" size={26} strokeWidth={1.4} aria-hidden="true" />
                  <blockquote className="mt-5 font-body text-base leading-relaxed text-paper/85">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 font-body text-sm font-medium uppercase tracking-wider text-paper/50">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-paper/25 px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-ocean hover:text-ocean-light"
          >
            Ver Avaliações no Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
