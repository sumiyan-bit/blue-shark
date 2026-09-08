import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { images } from "../data/images";

export function Chef() {
  return (
    <section id="chef" className="scroll-mt-24 bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <Eyebrow tone="dark">O Chef</Eyebrow>
          <h2 className="text-balance mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Chef Nilson Pires
          </h2>
          <p className="mt-4 font-display text-lg italic text-ocean-deep">
            Mais de 20 anos dedicados à culinária japonesa.
          </p>
          <div className="mt-6 space-y-4 font-body text-base text-ink/70">
            <p>
              Ao longo de mais de duas décadas, Nilson Pires aprendeu a valorizar o
              tradicional e a ser um perfeccionista nos mínimos detalhes da cozinha
              japonesa. Sua trajetória sempre pregou pela qualidade, sem nunca abrir mão
              da essência cultural dos pratos que prepara.
            </p>
            <p>
              É esse respeito pelas técnicas e tradições japonesas, combinado a um olhar
              atento para cada corte, cada tempero e cada apresentação, que deu origem à
              filosofia do Blue Shark: honrar a herança japonesa em cada prato servido.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ink/5">
            <img
              src={images.chef}
              alt="Chef Nilson Pires servindo um prato de sushi"
              loading="lazy"
              className="h-full w-full object-cover object-[38%_center]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
