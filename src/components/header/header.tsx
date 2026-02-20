"use client";

import { useLanguage } from "@/hooks/use-language";
import { AcceptedLanguages } from "@/types/language";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const { currentData, currentLanguage, setCurrentLanguage } = useLanguage();
  const header = currentData.header;
  const options = currentData.langOptions;

  useEffect(() => {
    let animationId: number;

    const handleScroll = () => {
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
      animationId = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "64px",
      },
    );

    Object.values(header).forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [header]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const lang = e.target.value as AcceptedLanguages;
    setCurrentLanguage(lang);
  }

  return (
    <>
      <header
        className={twMerge(
          "sticky top-0 z-50 backdrop-blur",
          scrolled ? "border-b border-border backdrop-blur" : "bg-transparent",
        )}
      >
        <div className="container max-w-6xl flex justify-between items-center mx-auto px-4 h-16">
          <Link href="#hero">
            <span className="text-primary text-xl font-bold hover:text-primary/80 transition-colors">&lt;MR /&gt;</span>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setMenuIsOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>

          <nav className="hidden md:block">
            <ol className="flex gap-x-10 items-center">
              {Object.values(header).map((item, index) => (
                <li key={item.title}>
                  <Link href={item.href}>
                    <span className="text-primary text-xs font-mono">0{index + 1}.</span>{" "}
                    <span
                      className={twMerge(
                        "text-sm hover:text-foreground transition-colors duration-300",
                        item.id === activeSection ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
              <select
                defaultValue={currentLanguage}
                onChange={handleChange}
                className="text-sm bg-background border border-border p-1 rounded-md"
              >
                <option value="pt-br">{options["pt-br"]}</option>
                <option value="en">{options["en"]}</option>
              </select>
            </ol>
          </nav>
        </div>

        <div className="w-full max-w-sm absolute z-40 translate-x-1/2 right-1/2 translate-y-1/4 transition-all duration-300 opacity-100 md:opacity-0">
          <nav
            className={twMerge(
              "flex items-center justify-center py-10 border border-border rounded-md bg-background transition-all",
              isMenuOpen ? "opacity-100 size-full" : "opacity-0 size-0 pointer-events-none",
            )}
          >
            <ol className="w-full flex flex-col items-center gap-4">
              {Object.values(header).map((item, index) => (
                <li key={item.title}>
                  <a href={item.href} onClick={() => setMenuIsOpen(false)}>
                    <span className="text-primary text-sm">0{index + 1}.</span>{" "}
                    <span
                      className={twMerge(
                        "text-lg hover:text-foreground transition-colors duration-300",
                        item.id === activeSection ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
              <select
                defaultValue={currentLanguage}
                onChange={handleChange}
                className="mt-10 mr-4 text-sm bg-background border border-border p-1 rounded-md self-end"
              >
                <option value="pt-br">{options["pt-br"]}</option>
                <option value="en">{options["en"]}</option>
              </select>
            </ol>
          </nav>
        </div>
      </header>
      <div
        className={twMerge(
          "fixed inset-0 z-30 transition-all",
          isMenuOpen ? "bg-black/40 backdrop-blur" : "bg-transparent pointer-events-none",
        )}
        onClick={() => setMenuIsOpen(false)}
      />
    </>
  );
}
