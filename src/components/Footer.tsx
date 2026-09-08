import { InstagramIcon as Instagram } from "./ui/InstagramIcon";
import { siteConfig, fullAddress, whatsappUrl } from "../data/siteConfig";
import logoTight from "../assets/logo-tight-transparent.png";

const quickLinks = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#delivery", label: "Delivery" },
  { href: "#sobre", label: "Sobre" },
  { href: "#chef", label: "Chef" },
  { href: "#localizacao", label: "Localização" },
];

export function Footer() {
  return (
    <footer id="contato" className="scroll-mt-24 border-t border-white/5 bg-ink pb-28 pt-16 lg:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <img src={logoTight} alt={`${siteConfig.name}, ${siteConfig.tagline}`} className="h-36 w-auto" />
        </div>

        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-paper/50">
            Contato
          </p>
          <ul className="mt-5 space-y-3 font-body text-sm text-paper/70">
            <li>
              <a href={whatsappUrl} className="hover:text-ocean-light">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ocean-light"
              >
                <Instagram size={15} strokeWidth={1.6} />
                {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-paper/50">
            Links rápidos
          </p>
          <ul className="mt-5 space-y-3 font-body text-sm text-paper/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-ocean-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-paper/50">
            Endereço completo
          </p>
          <p className="mt-5 font-body text-sm leading-relaxed text-paper/70">{fullAddress}</p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-6 lg:px-10">
        <div className="border-t border-white/5 pt-6 font-body text-xs text-paper/40">
          © {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
