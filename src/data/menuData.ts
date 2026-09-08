export interface MenuItem {
  name: string;
  description?: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
}

// Cardápio real do Blue Shark, transcrito do cardápio fornecido pelo restaurante.
export const menuData: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      { name: "Sunomono", description: "Pepino, cenoura, wakame, harusame", price: 12.9 },
      { name: "Misso Shiro", description: "Cebolinha, pasta de soja, wakame", price: 12.9 },
      { name: "Shimeji", description: "Shimeji na manteiga, cebolinha", price: 25.9 },
      { name: "Guiosa de Porco", description: "6 unidades · molho ponzu, óleo de gergelim", price: 21.9 },
      { name: "Carpaccio de Salmão", description: "Limão, azeite, gergelim, sal rosa, tomate cereja, cebolinha", price: 29.9 },
      { name: "Ussuzukuri de Peixe Branco", description: "Molho ponzu, tomate cereja, cebolinha, furikake", price: 29.9 },
      { name: "Ceviche", description: "Mix de peixe, leite de tigre, cebola roxa, tomate cereja, coentro, azeite extra virgem", price: 39.9 },
      { name: "Gohan", description: "Arroz japonês", price: 9.9 },
      { name: "Hot Roll de Salmão", description: "10 unidades · cream cheese, kani kama, teriaki, cebolinha", price: 30.9 },
      { name: "Karaage", description: "3 unidades · gengibre, sobrecoxa, shoyu, alho, cebolinha", price: 22.9 },
      { name: "Harumaki", description: "6 unidades · queijo", price: 15.9 },
    ],
  },
  {
    id: "temakis",
    title: "Temakis",
    items: [
      { name: "Salmão Simples", description: "Shari, nori", price: 27.9 },
      { name: "Salmão Completo", description: "Cebolinha, cream cheese, nori, shari", price: 29.9 },
      { name: "Salmão Grelhado", description: "Salmão grelhado, cream cheese, cebolinha", price: 29.9 },
      { name: "Skin Simples", description: "Shari, nori", price: 22.9 },
    ],
  },
  {
    id: "hossomaki",
    title: "Hossomaki",
    note: "8 unidades",
    items: [
      { name: "Shakemaki", description: "Salmão", price: 21.9 },
      { name: "Kappamaki", description: "Pepino", price: 18.9 },
      { name: "Kanimaki", description: "Kani kama", price: 20.9 },
      { name: "Ume Shisso", description: "Pepino, umeboshi, shisso", price: 19.9 },
    ],
  },
  {
    id: "uramakis",
    title: "Uramakis",
    note: "8 unidades",
    items: [
      { name: "Califórnia", price: 25.9 },
      { name: "Skin", price: 23.9 },
      { name: "Salmão", price: 28.9 },
      { name: "Salmão Grelhado", description: "Salmão, cebolinha, cream cheese", price: 29.9 },
      { name: "Salmão Filadélfia", description: "Salmão, cream cheese", price: 29.9 },
    ],
  },
  {
    id: "niguiris",
    title: "Sushis (Niguiris)",
    note: "4 unidades",
    items: [
      { name: "Niguiri de Salmão", price: 21.9 },
      { name: "Niguiri de Peixe Branco", price: 20.9 },
      { name: "Niguiri de Kani Kama", price: 19.9 },
      { name: "Niguiri de Skin", description: "Skin, limão, cream cheese, cebolinha", price: 18.9 },
      { name: "Niguiri de Barriga de Salmão", description: "Azeite trufado, flor de sal", price: 23.9 },
      { name: "Niguiri Barriga de Salmão Misso e Alho", price: 23.9 },
      { name: "Jô Salmão", description: "Cream cheese, cebolinha", price: 23.9 },
      { name: "Jô Salmão Ovo de Codorna", description: "Maçaricado, azeite trufado, tobiko, cebolinha", price: 24.9 },
      { name: "Jô Laranja", description: "Salmão, laranja caramelizada", price: 23.9 },
      { name: "Gunka Tobiko", description: "Ovas de peixe voador", price: 30.9 },
    ],
  },
  {
    id: "especiais",
    title: "Especiais",
    note: "Todos acompanham molho teriaki",
    items: [
      { name: "Futomaki Filadélfia", description: "10 unidades · salmão grelhado, rúcula, cream cheese", price: 34.9 },
      { name: "Futomaki Califórnia", description: "10 unidades · salmão, manga, pepino, cream cheese", price: 34.9 },
      { name: "Neris Roll", description: "8 unidades · stick de salmão, cream cheese, salmão cru, teriaki, maracujá", price: 29.9 },
      { name: "Acelga Maki", description: "8 unidades · acelga, salmão grelhado, cream cheese, cebolinha, sriracha", price: 30.9 },
      { name: "Batera Salmão", description: "8 unidades · salmão, tobiko, cebolinha, raspas de limão siciliano, alga hijiki", price: 35.9 },
    ],
  },
  {
    id: "sashimis",
    title: "Sashimis",
    note: "5 fatias",
    items: [
      { name: "Salmão", price: 29.9 },
      { name: "Peixe Branco", price: 24.9 },
      { name: "Barriga de Salmão", description: "Azeite trufado, flor de sal", price: 30.9 },
      { name: "Sashimi Mix", description: "15 fatias variadas", price: 60.9 },
    ],
  },
  {
    id: "quentes",
    title: "Quentes",
    items: [
      { name: "Yakissoba Carne", description: "Macarrão, repolho, acelga, cenoura, cebola, vagem, óleo de gergelim, carne", price: 34.9 },
      { name: "Yakissoba Frango", price: 32.9 },
      { name: "Yakissoba Vegetais", price: 30.9 },
      { name: "Yakissoba Misto", price: 33.9 },
      { name: "Teppan Salmão", description: "Legumes na manteiga, gohan, salmão", price: 38.9 },
      { name: "Karaage Don", description: "4 pedaços de coxa, gohan, furikake, sunomono, cebolinha", price: 35.9 },
      { name: "Karê Carne", description: "Gohan, karê, batata, cenoura", price: 40.9 },
      { name: "Tonkatsu Karê", description: "Lombo empanado, gohan, batata, cenoura, cebola", price: 39.9 },
    ],
  },
  {
    id: "bowls",
    title: "Bowls",
    items: [
      { name: "Tirashizushi", description: "3 fatias de salmão, 3 barriga, 3 saint peter, furikake, conservas japonesas, takuan, kani kama", price: 56.9 },
      { name: "Shake-don", description: "Salmão, cebolinha, teriaki, furikake, gergelim", price: 46.9 },
      { name: "Skin-don", description: "Pele de salmão grelhada, cebolinha, furikake, gergelim, teriaki", price: 39.9 },
      { name: "Misto (Salmão e Skin)", description: "Cebolinha, teriaki, furikake, gergelim", price: 41.9 },
      { name: "Pocket Salmão", description: "100g de arroz, 100g de recheio", price: 27.9 },
      { name: "Pocket Misto", price: 24.9 },
      { name: "Pocket Skin", price: 22.9 },
    ],
  },
  {
    id: "combinados",
    title: "Combinados",
    items: [
      { name: "Combo 1", description: "8 unidades · 2 niguiris salmão, 2 kani kama, 4 uramaki salmão", price: 30.9 },
      { name: "Combo 2", description: "14 unidades · 2 niguiris salmão, 2 skin, 2 jô salmão, 4 hossomaki salmão, 4 uramaki califórnia", price: 35.9 },
      { name: "Combo 3", description: "18 unidades · 5 sashimis salmão, 3 niguiris salmão, 2 jô salmão, 8 uramakis salmão", price: 53.9 },
      { name: "Combo 5", description: "19 unidades · 5 sashimis salmão, 4 niguiris salmão, 2 jô salmão, 4 hossomaki salmão, 4 uramakis salmão", price: 54.9 },
    ],
  },
  {
    id: "combinados-especiais",
    title: "Combinados Especiais",
    note: "Ideal para compartilhar",
    items: [
      { name: "Combo Especial 1", description: "23 peças · sashimis de salmão e saint peter, jô salmão, niguiris salmão e tilápia, uramakis e hossomaki salmão", price: 69.9 },
      { name: "Combo Especial 2", description: "39 peças · sashimis mix, niguiris salmão, jô salmão, hossomakis e uramakis salmão", price: 141.9 },
      { name: "Combo Sushi Especial 3", description: "44 peças · niguiris salmão e skin, jô salmão, uramakis e hossomakis salmão, futomakis filadélfia", price: 151.9 },
      { name: "Super Combinado", description: "76 peças · sashimis mix, niguiris salmão e saint peter, jô salmão, uramakis filadélfia, hossomakis salmão, hot roll, neris roll", price: 232.9 },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Água Mineral sem Gás", price: 5.9 },
      { name: "Água Mineral com Gás", price: 5.9 },
      { name: "Água Tônica", price: 8.9 },
      { name: "Coca-Cola", price: 8.9 },
      { name: "Coca-Cola 2 Litros", price: 16.9 },
      { name: "Fanta Laranja", price: 8.9 },
      { name: "Fanta Uva", price: 8.9 },
      { name: "Fanta Guaraná", price: 8.9 },
      { name: "Sprite", price: 8.9 },
      { name: "Schweppes Citrus", price: 8.9 },
      { name: "H2O Citrus", price: 8.9 },
      { name: "H2O Limão", price: 8.9 },
      { name: "Chá Matte Leão", price: 8.9 },
      { name: "Suco Del Valle", description: "Sabores variados", price: 8.9 },
      { name: "Yai Chá", description: "Sabores variados", price: 8.9 },
      { name: "Cerveja Antarctica Original", price: 9.9 },
      { name: "Heineken", price: 12.9 },
      { name: "Sprite Absolut", price: 12.9 },
      { name: "Jack & Coke", price: 12.9 },
      { name: "Monster", description: "Sabores variados", price: 12.9 },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    note: "Consultar disponibilidade",
    items: [{ name: "Café Expresso", price: 4.0 }],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { name: "Porção extra de Gengibre", price: 4.0 },
      { name: "Porção extra de Wasabi", price: 4.0 },
      { name: "Shoyu da Casa", description: "30ml", price: 4.0 },
      { name: "Teriyaki da Casa", description: "30ml", price: 4.0 },
    ],
  },
];

// Seleção com curadoria para a seção "Destaques" da home, priorizando as
// opções com barriga de salmão, citadas nas avaliações reais dos clientes.
export const featuredItems: (MenuItem & { category: string })[] = [
  { category: "Niguiris", name: "Niguiri de Barriga de Salmão", description: "Azeite trufado, flor de sal", price: 23.9 },
  { category: "Sashimis", name: "Sashimi de Barriga de Salmão", description: "Azeite trufado, flor de sal", price: 30.9 },
  { category: "Niguiris", name: "Niguiri Barriga de Salmão, Misso e Alho", price: 23.9 },
];

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
