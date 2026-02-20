import { LanguageSchema } from "@/types/language";
import { Download, ExternalLinkIcon, Github, Mail } from "lucide-react";

export const EN = {
  langOptions: {
    "pt-br": "🇧🇷 portuguese",
    en: "🇺🇸 English",
  },
  header: {
    about: { title: "About", href: "#about", id: "about" },
    experience: { title: "Experience", href: "#experience", id: "experience" },
    projects: { title: "Projects", href: "#projects", id: "projects" },
    technologies: { title: "Technologies", href: "#technologies", id: "technologies" },
    contact: { title: "Contact", href: "#contact", id: "contact" },
  },
  hero: {
    greeting: "Hi, my name is",
    name: "Matheus Rodovalho",
    role: "Web Developer",
    description:
      "Web developer graduated in Multiplatform Software Development at Fatec, with experience in fullstack applications, REST API integration, practical projects, and basic knowledge of cloud and deployment.",
    links: [
      {
        id: "download",
        label: "Download CV",
        Icon: Download,
        href: "/cv_matheus_rodovalho_en.pdf",
        target: "_blank",
      },
      {
        id: "contact",
        label: "Contact",
        Icon: Mail,
        href: "#contact",
        target: "_self",
      },
    ],
  },
  about: {
    title: "About me",
    description: [
      "I graduated in {course} from {college} and I am looking for job opportunities as a software developer.",
      "I have hands-on experience with fullstack projects, REST API integration, Git version control, and knowledge of cloud and application deployment.",
      "My focus is to constantly evolve and always build solutions that truly solve problems. I can contribute to both {backend} and {frontend}, always open to learning new technologies, tools, and development best practices.",
    ],
    keywords_to_highlight: {
      course: "Multiplatform Software Development",
      college: "Fatec",
      backend: "Backend",
      frontend: "Frontend",
    },
  },
  experience: {
    title: "Professional Experience",
    cards: [
      {
        title: "Freelance Frontend Developer",
        subtitle: "Dashboard Project with WhatsApp Chatbot",
        duration: "~2 months",
        description: [
          "Frontend interface development and adjustments",
          "Integration with backend APIs",
          "Team collaboration with more experienced developers",
        ],
      },
    ],
  },
  projects: [
    {
      title: "Focus Timer - Backend",
      subtitle: "REST API for user, timer, and task management",
      description:
        "RESTful API responsible for JWT-based authentication, custom timer creation, and task management using MongoDB. Built with a layered architecture focused on clean organization, automated testing, and cloud VM deployment.",
      status: "In Development",
      tags: ["Node.js + Express", "MongoDB + Mongoose", "JWT", "Testing with Vitest", "Cloud VM Deployment"],
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
      subtitle: "Web interface for focus and productivity management",
      description:
        "Frontend application built with React and Next.js that consumes the Focus Timer API. Includes authentication, a dashboard for timer control, task management features, and a landing page.",
      status: "In Development",
      tags: ["React + Next.js", "Tailwind CSS", "REST API Integration", "Dashboard", "Cloud VM Deployment"],
      links: [
        {
          label: "Github",
          Icon: Github,
          href: "https://github.com/matholv512/focus-timer-frontend",
        },
        // {
        //   label: "Preview",
        //   Icon: ExternalLinkIcon,
        //   href: "",
        // },
      ],
    },
    {
      title: "Personal Portfolio",
      subtitle: "Multilingual web application showcasing projects and experience",
      description:
        "Portfolio built with React and Next.js featuring internationalization (i18n), a projects section, an about page, and downloadable resume versions. Focused on performance, clean component architecture, and user experience.",
      tags: ["React + Next.js", "TypeScript", "i18n", "Tailwind CSS", "Deployment"],
      links: [
        {
          label: "Github",
          Icon: Github,
          href: "",
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
      subtitle: "Responsive landing page based on a Frontend Mentor layout",
      description:
        "Project developed as a practical challenge focused on semantic HTML structure, React componentization, Tailwind CSS styling, and full responsiveness across different screen sizes.",
      tags: ["React", "HTML5", "Tailwind CSS", "Vercel Deployment"],
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
    title: "Technologies",
  },
  contact: {
    title: "Contact",
    description:
      "I am looking for my first opportunity as a Junior Web Developer. If you have an open position or an interesting project, I would be glad to talk!",
  },
  footer: {
    title: "Developed by Matheus Rodovalho",
  },
} satisfies LanguageSchema;
