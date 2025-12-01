import devmovies from "../assets/devmovie.png";
import devbills from "../assets/devbills.png";
import hamburgueria from "../assets/hamburgueria1.png";
import convertor from "../assets/convertor.png";
import react from "../assets/ProjetoREact.png";
import desafio from "../assets/desafio-react.png";


export const projects = [
  {
    id: 1,
    title: "DevMovies – Catálogo de Filmes",
    description:
      "Aplicação em React que lista filmes consumindo uma API externa. Inclui navegação com React Router, página de detalhes, busca e interface moderna com Styled Components.",
    image: devmovies,
    github: "https://github.com/JulianaPaganini/projectmovie",
    demo: ""
  },

  {
    id: 2,
    title: "DevBills – Controle Financeiro",
    description:
      "API para gerenciamento de despesas, permitindo cadastro, edição, exclusão e listagem de contas. Desenvolvido seguindo boas práticas de organização e estrutura em Node.js e PostgreSQL.",
    image: devbills,
    github: "https://github.com/JulianaPaganini/devbills-api",
    demo: ""
  },

  {
    id: 3,
    title: "Hamburgueria – API de Pedidos",
    description:
      "API completa desenvolvida em Node.js para gerenciamento de pedidos de uma hamburgueria. Permite criar pedidos, listar, editar status e excluir, seguindo o modelo de um sistema real.",
    image: hamburgueria,
    github: "https://github.com/JulianaPaganini/Project-node-hambugueria",
    demo: ""
  },

  {
    id: 4,
    title: "Conversor de Moedas",
    description:
      "Aplicação simples e intuitiva para conversão de valores entre moedas usando taxas reais de API externa. Interface amigável e perfeita para estudo de requisições e manipulação de dados.",
    image: convertor,
    github: "https://github.com/JulianaPaganini/Projeto-Conversor-Moeda",
    demo: ""
  },

    {
    id: 5,
    title: "Login de Usuário",
    description:
      "Aplicação em React que implementa um sistema de login e autenticação. A interface é construída em React, com formulários controlados e validação de campos. O projeto demonstra boas práticas de organização de componentes e roteamento, servindo como base rápida para aplicações com área restrita.",
    image: react,
    github: "https://github.com/JulianaPaganini/Login-React",
    demo: ""
  },

   {
    id: 6,
    title: "Hamburgueria – Cardápio & Pedidos",
    description:
     "Aplicação front-end desenvolvida com React para uma hamburgueria fictícia, permitindo aos usuários navegar por um cardápio de produtos, adicionar itens ao carrinho, ajustar quantidades e visualizar o total do pedido. Interface responsiva e intuitiva, utilizando componentes funcionais, roteamento (React Router) e styled-components para estilo moderno. Ideal para exemplificar habilidades em state management, hooks e boas práticas de UI/UX.",
    image: desafio,
    github: "https://github.com/JulianaPaganini/Hamburgueria-React",
    demo: ""
  }
];
