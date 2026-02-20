import { useLanguage } from "@/hooks/use-language";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function HeroSection() {
  const { currentData } = useLanguage();
  const hero = currentData.hero;

  return (
    <section id="hero" className="min-h-[85vh] pt-24 min-[425px]:pt-28 md:pt-32 lg:pt-40">
      <div className="container max-w-6xl flex flex-col gap-3 mx-auto px-4 min-[425px]:px-10">
        <p className="text-primary text-sm font-mono tracking-tight">{hero.greeting}</p>

        <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl">{hero.name}</h1>
        <h2 className="text-3xl text-muted-foreground font-bold sm:text-4xl lg:text-5xl">{hero.role}</h2>
        <div className="leading-relaxed text-lg">
          <span className="text-primary font-medium">Backend</span> |{" "}
          <span className="text-primary font-medium">Frontend</span> |{" "}
          <span className="text-primary font-medium">Fullstack</span>
        </div>
        <p className="max-w-xl mt-1 text-muted-foreground text-lg leading-relaxed">{hero.description}</p>

        <div className="w-full mt-3 flex flex-wrap items-center gap-3">
          {hero.links.map((link) => (
            <Link
              key={link.label}
              role="button"
              download={link.id === "download"}
              href={link.href}
              target={link.target}
              className={twMerge(
                "px-4 py-2 inline-flex items-center gap-x-3 text-xs border border-primary rounded-md min-[425px]:px-6 min-[425px]:py-3",
                link.id === "contact"
                  ? "bg-primary text-background hover:bg-primary/80"
                  : "text-primary bg-transparent hover:bg-primary hover:text-background",
              )}
            >
              <link.Icon className="size-4" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
