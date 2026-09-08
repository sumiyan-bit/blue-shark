# Blue Shark — Site Institucional

Site institucional completo para o **Blue Shark**, restaurante japonês em Sorocaba/SP, desenvolvido como projeto de portfólio e proposta comercial para o cliente.

**Site no ar:** [courageous-crisp-e4fd59.netlify.app](https://courageous-crisp-e4fd59.netlify.app/)

## Sobre o projeto

O site foi construído com conteúdo real do restaurante: cardápio completo com preços, fotos autorais dos pratos e do chef, avaliações reais do Google e horário de funcionamento. O objetivo principal é apresentar o restaurante profissionalmente e converter visitantes em pedidos de delivery pelo WhatsApp.

## Tecnologias utilizadas

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://motion.dev/) (animações)
- [Vite](https://vite.dev/) (build)
- [Lucide Icons](https://lucide.dev/)

## Funcionalidades

- Design responsivo, com barra de navegação fixa (mobile-first)
- Cardápio interativo com destaques e filtro por categoria
- Pedido direto via WhatsApp, com mensagem pré-preenchida
- Localização com mapa incorporado
- SEO local com dados estruturados (Schema.org / Restaurant)
- Animações leves de entrada e transições de página

## Como rodar o projeto localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173` (ou na porta indicada no terminal).

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura do projeto

```
src/
  components/   → cada seção do site (Hero, Menu, Chef, Footer, etc.)
  data/         → configurações, cardápio e imagens centralizados
  assets/       → fotos e logo do restaurante
```

## Autor

Desenvolvido por **Yan** ([@sumiyan-bit](https://github.com/sumiyan-bit)), estudante de TI e desenvolvedor de sites e automações para negócios locais.
