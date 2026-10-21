# Blue Shark | Site Institucional

Site institucional completo para o **Blue Shark**, restaurante japonês em Sorocaba/SP, desenvolvido como projeto de portfólio e proposta comercial para o cliente.

**Site no ar:** [courageous-crisp-e4fd59.netlify.app](https://courageous-crisp-e4fd59.netlify.app/)

## Sobre o projeto

O site foi construído com conteúdo real do restaurante: cardápio completo com preços, fotos autorais dos pratos e do chef, avaliações reais do Google e horário de funcionamento. O objetivo principal é apresentar o restaurante profissionalmente e converter visitantes em pedidos de delivery pelo iFood e pelo WhatsApp.

## Tecnologias utilizadas

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://motion.dev/) (animações)
- [Vite](https://vite.dev/) (build)
- [Lucide Icons](https://lucide.dev/)

## Funcionalidades

- Design responsivo pensado primeiro pro celular, com barra fixa de pedido (Cardápio, WhatsApp e iFood)
- Cardápio interativo com destaques e filtro por categoria
- Pedido pelo iFood ou direto pelo WhatsApp, com mensagem pré-preenchida
- Selo "Aberto agora / Abre hoje às 18h / Fechado" calculado no horário de Brasília, incluindo a folga do último domingo do mês
- Prévia com foto quando o link é compartilhado no WhatsApp e redes sociais (Open Graph)
- Imagens em WebP redimensionadas (de 4,1 MB para 0,9 MB), carregamento rápido no 4G
- Localização com mapa incorporado e link para as avaliações no Google
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
  data/         → configurações, cardápio, imagens e regra de horário centralizados
  assets/       → fotos e logo do restaurante
```

## Autor

Desenvolvido por **Yan** ([@sumiyan-bit](https://github.com/sumiyan-bit)), estudante de TI e desenvolvedor de sites e automações para negócios locais.
