// Banco central de imagens do site, com as fotos reais do Blue Shark.

import chefPhoto from "../assets/chef.webp";
import heroPhoto from "../assets/hero.webp";
import aboutPhoto from "../assets/about.webp";
import menuSashimis from "../assets/menu/sashimis.webp";
import menuNiguiris from "../assets/menu/niguiris.webp";
import menuUramakis from "../assets/menu/uramakis.webp";
import menuHossomaki from "../assets/menu/hossomaki.webp";
import menuTemakis from "../assets/menu/temakis.webp";
import menuEspeciais from "../assets/menu/especiais.webp";
import menuCombinados from "../assets/menu/combinados.webp";
import menuQuentes from "../assets/menu/quentes.webp";
import insta1 from "../assets/instagram/1.webp";
import insta2 from "../assets/instagram/2.webp";
import insta3 from "../assets/instagram/3.webp";
import insta4 from "../assets/instagram/4.webp";
import insta5 from "../assets/instagram/5.webp";
import insta6 from "../assets/instagram/6.webp";

export const images = {
  hero: heroPhoto,
  heroAlt: "Prato de sashimi com salmão e peixe branco, servido no Blue Shark",

  about: aboutPhoto,
  chef: chefPhoto,

  instagramPreview: [insta1, insta2, insta3, insta4, insta5, insta6],

  menuCategoryCovers: {
    sashimis: menuSashimis,
    niguiris: menuNiguiris,
    uramakis: menuUramakis,
    hossomaki: menuHossomaki,
    temakis: menuTemakis,
    especiais: menuEspeciais,
    combinados: menuCombinados,
    quentes: menuQuentes,
  },

  delivery: heroPhoto,
};
