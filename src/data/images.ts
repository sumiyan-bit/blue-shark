// Banco central de imagens do site, com as fotos reais do Blue Shark.

import chefPhoto from "../assets/chef.jpg";
import heroPhoto from "../assets/hero.jpg";
import aboutPhoto from "../assets/about.jpg";
import menuSashimis from "../assets/menu/sashimis.jpg";
import menuNiguiris from "../assets/menu/niguiris.jpg";
import menuUramakis from "../assets/menu/uramakis.jpg";
import menuHossomaki from "../assets/menu/hossomaki.jpg";
import menuTemakis from "../assets/menu/temakis.jpg";
import menuEspeciais from "../assets/menu/especiais.jpg";
import menuCombinados from "../assets/menu/combinados.jpg";
import menuQuentes from "../assets/menu/quentes.jpg";
import insta1 from "../assets/instagram/1.jpg";
import insta2 from "../assets/instagram/2.jpg";
import insta3 from "../assets/instagram/3.jpg";
import insta4 from "../assets/instagram/4.jpg";
import insta5 from "../assets/instagram/5.jpg";
import insta6 from "../assets/instagram/6.jpg";

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
