import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "../data/images";
import combinado from "../assets/hero-combinado.webp";
import { siteConfig } from "../data/siteConfig";
import { OpenBadge } from "./ui/OpenBadge";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink lg:min-h-[100vh]"
    >
      {/* padrão de ondas japonesas (seigaiha), bem suave */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-kin opacity-[0.07]">
        <defs>
          <pattern id="seigaiha" width="56" height="28" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1">
              {[26, 19, 12, 5].map((r) => (
                <g key={r}>
                  <circle cx="0" cy="28" r={r} />
                  <circle cx="56" cy="28" r={r} />
                  <circle cx="28" cy="14" r={r} />
                </g>
              ))}
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      {/* composição de fotos (só em telas largas) */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute right-[4%] top-1/2 hidden aspect-[10/11] w-[38vw] max-w-[520px] -translate-y-[46%] lg:block"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-10 top-6 aspect-square w-[62%] rounded-full bg-shu/85 blur-[1px]"
        />
        <div className="enso absolute -right-8 bottom-10 aspect-square w-[55%] text-kin" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-[4%] aspect-square w-[72%] overflow-hidden rounded-full border border-kin/30 shadow-2xl shadow-black/60"
        >
          <img
            src={combinado}
            alt="Combinado do Blue Shark com sushis, sashimis, guiozas e porções"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[10%] left-[8%] aspect-square w-[40%] overflow-hidden rounded-full border-4 border-ink shadow-xl shadow-black/60"
        >
          <img src={images.hero} alt={images.heroAlt} className="h-full w-full object-cover" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-10 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-body text-xs uppercase tracking-[0.4em] text-kin"
        >
          {siteConfig.city} • {siteConfig.state}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mt-6 max-w-3xl font-display text-4xl lg:max-w-[52%] leading-[1.15] text-paper sm:text-5xl lg:text-6xl"
        >
          A essência da culinária japonesa em cada detalhe.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-balance mt-6 max-w-xl font-body text-base text-paper/80 lg:max-w-[46%] sm:text-lg"
        >
          Do corte preciso à harmonia dos sabores, cada prato carrega a tradição e a
          técnica que definem a verdadeira culinária japonesa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#delivery"
            className="inline-flex items-center justify-center rounded-sm bg-shu px-8 py-4 font-body text-[15px] font-bold uppercase tracking-[0.2em] text-paper transition-transform hover:scale-[1.03] hover:bg-shu-light"
          >
            Pedir Delivery
          </a>
          <a
            href="#cardapio"
            className="inline-flex items-center justify-center rounded-sm border border-paper/30 px-8 py-4 font-body text-[15px] font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-kin hover:text-kin"
          >
            Conhecer o Cardápio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8"
        >
          <OpenBadge />
        </motion.div>

        {/* no celular a foto aparece abaixo, em moldura de arco */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative mt-12 h-72 max-w-sm lg:hidden"
        >
          <div aria-hidden="true" className="absolute -left-4 top-4 aspect-square w-40 rounded-full bg-shu/85" />
          <div className="absolute right-0 top-0 aspect-square h-full overflow-hidden rounded-full border border-kin/30">
            <img src={combinado} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
