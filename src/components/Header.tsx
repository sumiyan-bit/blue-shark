import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, deliveryUrl } from "../data/siteConfig";
import logoMark from "../assets/logo-mark-transparent.png";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#chef", label: "Chef" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoMark} alt={`${siteConfig.name}, ${siteConfig.tagline}`} className="h-11 w-11 object-contain sm:h-12 sm:w-12" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg tracking-[0.08em] text-paper">
              {siteConfig.name.toUpperCase()}
            </span>
            <span className="mt-1 font-body text-[10px] uppercase tracking-[0.35em] text-ocean">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-paper/80 transition-colors hover:text-ocean"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={deliveryUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-ocean px-6 py-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-[1.03] hover:bg-ocean-light"
          >
            Pedir Delivery
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-paper lg:hidden"
          aria-label="Abrir menu"
        >
          <MenuIcon size={26} strokeWidth={1.5} />
        </button>
      </div>
    </header>

    {createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "#070a12" }}
            className="fixed inset-0 z-[999] flex h-dvh w-dvw flex-col bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <img src={logoMark} alt={siteConfig.name} className="h-11 w-11 object-contain" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-paper"
                aria-label="Fechar menu"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-7 px-9">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl text-paper"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-9 pb-10">
              <a
                href={deliveryUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-sm bg-ocean px-6 py-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-ink"
              >
                Pedir Delivery
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )}
    </>
  );
}
