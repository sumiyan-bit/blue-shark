import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "../data/images";
import { siteConfig } from "../data/siteConfig";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink lg:min-h-[100vh]"
    >
      <motion.img
        style={{ y }}
        src={images.hero}
        alt={images.heroAlt}
        className="absolute inset-0 h-full w-full scale-110 object-cover object-[35%_30%]"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-body text-xs uppercase tracking-[0.4em] text-ocean-light"
        >
          {siteConfig.city} • {siteConfig.state}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mt-6 max-w-3xl font-display text-4xl leading-[1.15] text-paper sm:text-5xl lg:text-6xl"
        >
          A essência da culinária japonesa em cada detalhe.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-balance mt-6 max-w-xl font-body text-base text-paper/80 sm:text-lg"
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
            href="#cardapio"
            className="inline-flex items-center justify-center rounded-sm border border-paper/30 px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-ocean hover:text-ocean-light"
          >
            Conhecer o Cardápio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
