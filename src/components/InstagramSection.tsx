import { InstagramIcon as Instagram } from "./ui/InstagramIcon";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { images } from "../data/images";
import { siteConfig } from "../data/siteConfig";

export function InstagramSection() {
  return (
    <section className="bg-ocean-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center">
          <Eyebrow>Instagram</Eyebrow>
          <h2 className="text-balance mt-5 font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
            Siga o Blue Shark
          </h2>
          <p className="mt-4 font-body text-ocean-light">{siteConfig.instagramHandle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {images.instagramPreview.map((src, i) => (
            <Reveal key={src + i} delay={i * 0.05}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/50">
                  <Instagram
                    className="text-paper opacity-0 transition-opacity group-hover:opacity-100"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-paper px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-[1.03]"
          >
            <Instagram size={16} strokeWidth={1.8} />
            Seguir no Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
