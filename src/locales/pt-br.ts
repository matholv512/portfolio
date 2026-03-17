import { Download, ExternalLinkIcon, Github, Mail } from "lucide-react";

export const PT_BR = {
  langOptions: {
    "pt-br": "🇧🇷 Português",
    en: "🇺🇸 Inglês",
  },
  header: {
    about: { title: "Sobre", href: "#about", id: "about" },
    experience: { title: "Experiência", href: "#experience", id: "experience" },
    projects: { title: "Projetos", href: "#projects", id: "projects" },
    technologies: { title: "Tecnologias", href: "#technologies", id: "technologies" },
    contact: { title: "Contato", href: "#contact", id: "contact" },
  },
  hero: {
    greeting: "Olá, meu nome é",
    name: "Matheus Rodovalho",
    role: "Desenvolvedor Web",
    description:
      "Desenvolvedor web formado em Desenvolvimento de Software Multiplataforma pela Fatec, com experiência em aplicações fullstack, integração de APIs REST, projetos práticos e noções de cloud e deploy.",
    links: [
      {
        id: "download",
        label: "Baixar CV",
        Icon: Download,
        href: "/cv_matheus_rodovalho_ptbr.pdf",
        target: "_blank",
      },
      {
        id: "contact",
        label: "Contato",
        Icon: Mail,
        href: "#contact",
        target: "_self",
      },
    ],
  },
  about: {
    title: "Sobre mim",
    description: [
      "Sou formado em {course} pela {college} e busco oportunidades de trabalho como desenvolvedor de software.",
      "Possuo experiência prática com projetos fullstack, integração de APIs REST, versionamento com Git e conhecimentos em cloud e deploy de aplicações.",
      "Meu foco é evoluir constantemente e sempre criar soluções que realmente resolvam problemas. Posso contribuir tanto no {backend} quanto no {frontend}, sempre aberto a aprender novas tecnologias, ferramentas e boas práticas de desenvolvimento.",
    ],
    keywords_to_highlight: {
      course: "Desenvolvimento de Software Multiplataforma",
      college: "Fatec",
      backend: "Backend",
      frontend: "Frontend",
    },
  },
  experience: {
    title: "Experiência Profissional",
    cards: [
      {
        title: "Desenvolvedor Frontend Freelancer",
        subtitle: "Projeto Dashboard com Chatbot WhatsApp",
        duration: "~2 meses",
        description: [
          "Desenvolvimento e ajustes de interfaces frontend",
          "Integração com APIs do backend",
          "Colaboração em equipe com desenvolvedores mais experientes",
        ],
      },
    ],
  },
  projects: [
    {
      title: "Focus Timer - Backend",
      subtitle: "API REST para gerenciamento de usuários, timers e tasks",
      description:
        "API RESTful responsável por autenticação com JWT, criação de timers personalizados e gerenciamento de tasks no MongoDB. Arquitetura em camadas com foco em organização, testes automatizados e deploy em VM cloud.",
      status: "Em Desenvolvimento",
      tags: ["Node.js + Express", "MongoDB + Mongoose", "JWT", "Testes com Vitest", "Deploy em VM Cloud"],
      links: [
        {
          label: "Github",
          Icon: Github,
          href: "https://github.com/matholv512/focus-timer-backend",
        },
        {
          label: "Preview",
          Icon: ExternalLinkIcon,
          href: "https://api-focustimer.duckdns.org",
        },
      ],
    },
    {
      title: "Focus Timer - Frontend",
      subtitle: "Interface web para gerenciamento de foco e produtividade",
      description:
        "Aplicação frontend construída com React e Next.js que consome a API do Focus Timer. Possui autenticação, dashboard com controle de timers, gerenciamento de tasks e landing page.",
      status: "Em Desenvolvimento",
      tags: ["React + Next.js", "Tailwind CSS", "Consumo de API REST", "Dashboard", "Deploy em VM Cloud"],
      links: [
        // {
        //   label: "Github",
        //   Icon: Github,
        //   href: "https://github.com/matholv512/focus-timer-frontend",
        // },
        // {
        //   label: "Preview",
        //   Icon: ExternalLinkIcon,
        //   href: "",
        // },
      ],
    },
    {
      title: "Portfólio Pessoal",
      subtitle: "Aplicação web com internacionalização e apresentação de projetos",
      description:
        "Portfólio desenvolvido com React e Next.js, com suporte a múltiplos idiomas (i18n), página de projetos, seção sobre mim e download de currículo em diferentes versões. Foco em performance, organização de componentes e experiência do usuário.",
      tags: ["React + Next.js", "TypeScript", "i18n", "Tailwind CSS", "Deploy"],
      links: [
        {
          label: "Github",
          Icon: Github,
          href: "https://github.com/matholv512/portfolio",
        },
        {
          label: "Preview",
          Icon: ExternalLinkIcon,
          href: "https://matheusrodovalho.duckdns.org",
        },
      ],
    },
    {
      title: "Easy Bank Landing Page",
      subtitle: "Landing page responsiva baseada em layout do Frontend Mentor",
      description:
        "Projeto desenvolvido como desafio prático com foco em HTML semântico, componentização em React, estilização com Tailwind CSS e responsividade para diferentes dispositivos.",
      tags: ["React", "HTML5", "Tailwind CSS", "Deploy em Vercel"],
      links: [
        {
          label: "Github",
          Icon: Github,
          href: "https://github.com/matholv512/Easybank-Landing-Page",
        },
        {
          label: "Preview",
          Icon: ExternalLinkIcon,
          href: "https://easybank-landing-page-beta-peach.vercel.app/",
        },
      ],
    },
  ],
  technologies: {
    title: "Tecnologias",
  },
  contact: {
    title: "Contato",
    description:
      "Estou em busca da minha primeira oportunidade como Desenvolvedor Web Júnior. Se você possui uma vaga ou projeto interessante, será um prazer conversar!",
  },
  footer: {
    title: "Desenvolvido por Matheus Rodovalho",
  },
};
