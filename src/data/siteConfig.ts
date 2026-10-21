// Configurações centrais do site: troque aqui quando tiver os links definitivos.

export const siteConfig = {
  name: "Blue Shark",
  tagline: "Culinária Japonesa",
  city: "Sorocaba",
  state: "SP",
  phoneDisplay: "(15) 99100-3442",
  whatsappNumber: "5515991003442", // formato internacional, sem símbolos
  whatsappMessage: "Olá! Vim pelo site do Blue Shark e gostaria de fazer um pedido.",
  address: {
    street: "Rua Orlando Bonetti, 108",
    neighborhood: "Jardim Residencial Villa Amato",
    cityState: "Sorocaba - SP",
    zip: "18087-653",
  },
  hours: {
    days: "Terça a domingo",
    time: "18h às 23h",
    exception: "Fechado no último domingo do mês",
  },
  instagramHandle: "@blueshark_sushi",
  instagramUrl: "https://www.instagram.com/blueshark_sushi/",
  rating: {
    value: 4.9,
    count: 57,
  },
  priceRange: "R$ 60–80 por pessoa",

  // TODO: substituir pelo link direto das avaliações do Google (Google Business Profile)
  googleReviewsUrl: "https://www.google.com/search?q=Blue+Shark+Sorocaba+avaliações",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

// O Blue Shark recebe pedidos tanto pelo WhatsApp quanto pelo iFood.
export const deliveryUrl = whatsappUrl;

export const ifoodUrl =
  "https://www.ifood.com.br/delivery/sorocaba-sp/blue-shark-sushi-jardim-residencial-villa-amato/3619771a-e11c-4b9c-86d5-afadd04665ed";

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.cityState}, ${siteConfig.address.zip}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;
