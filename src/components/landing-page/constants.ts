import { Github, Linkedin, Mail } from "lucide-react";

export const SOCIALS = [
  {
    Icon: Github,
    label: "Github",
    href: "https://github.com/matholv512",
    target: "_blank",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matheus-oliveira-rodovalho/",
    target: "_blank",
  },
  {
    Icon: Mail,
    label: "Enviar e-mail",
    href: "mailto:matheus.rodovalho.contato@gmail.com",
    target: "_self",
  },
] as const;

export const TECNOLOGIES = {
  Frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML/CSS",
    "Shadcn/ui",
    "Bootstrap",
    "Motion",
    "Tanstack Query",
  ],
  Backend: ["Node.js", "Express.js", "SQL Server", "MySQL", "MongoDB", "Sequelize", "Prisma", "Next Auth", "Swagger"],
  "Tools & Infra": ["Git", "GitHub", "Github Actions", "Linux", "Docker", "Nginx", "Oracle Cloud"],
} as const;
