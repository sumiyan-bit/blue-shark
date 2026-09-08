import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { images } from "../data/images";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={images.about}
              alt="Preparação artesanal de pratos japoneses no Blue Shark"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="enso absolute -bottom-10 -right-10 h-40 w-40 text-ocean-light lg:h-52 lg:w-52"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Eyebrow>Sobre o Blue Shark</Eyebrow>
          <h2 className="text-balance mt-5 font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
            Tradição que se transforma em experiência.
          </h2>
          <div className="mt-6 space-y-4 font-body text-base text-paper/75">
            <p>
              O Blue Shark nasceu da paixão inabalável do Chef Nilson Pires pela culinária
              japonesa. Com mais de 20 anos de experiência, ele construiu sua trajetória
              valorizando o tradicional e sendo um perfeccionista nos detalhes, sem nunca
              alterar a essência cultural dos pratos que serve.
            </p>
            <p>
              Aqui, cada prato é preparado com respeito às técnicas e princípios que
              definem a verdadeira culinária japonesa, usando ingredientes selecionados e
              um cuidado artesanal em cada etapa.
            </p>
            <p>
              Nossa missão é ser referência para quem ama a culinária japonesa em
              Sorocaba, em um ambiente acolhedor e com uma experiência que honra a rica
              herança gastronômica do Japão.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
