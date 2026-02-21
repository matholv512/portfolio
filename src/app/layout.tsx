import { LanguageProvider } from "@/providers/language-provider";
import { getCurrentLang } from "@/utils/get-current-lang";
import type { Metadata } from "next";
import { inter, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matheusrodovalho.duckdns.org"),
  title: "Matheus Rodovalho | Desenvolvedor Web FullStack",
  description:
    "Portfólio de Matheus Rodovalho, desenvolvedor web focado em React, Next.js e Node.js. Projetos, experiências e currículo.",
  keywords: [
    "Matheus Rodovalho",
    "desenvolvedor web",
    "portfólio",
    "desenvolvedor react",
    "desenvolvedor mode",
    "desenvolvedor de software",
    "web developer",
    "react developer",
    "node developer",
    "fullstack developer",
    "contratar desenvolvedor",
  ],
  openGraph: {
    title: "Matheus Rodovalho | Desenvolvedor Web FullStack",
    description: "Portfólio de Matheus Rodovalho, desenvolvedor web.",
    url: "https://matheusrodovalho.duckdns.org",
    siteName: "Matheus Rodovalho",
    images: [
      {
        url: "/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfólio de Matheus Rodovalho - Desenvolvedor Web",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Rodovalho | Desenvolvedor Web FullStack",
    description: "Projetos, experiências e currículo de Matheus Rodovalho.",
    images: ["/preview.jpeg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getCurrentLang();

  return (
    <html lang={lang} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <LanguageProvider currentLanguage={lang}>
        <body>{children}</body>
      </LanguageProvider>
    </html>
  );
}
