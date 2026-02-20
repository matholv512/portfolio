import { useLanguage } from "@/hooks/use-language";
import { twMerge } from "tailwind-merge";
import { SOCIALS } from "./constants";

export function ContactSection() {
  const { currentData } = useLanguage();
  const contact = currentData.contact;

  return (
    <section id="contact" className="pt-24 sm:pt-32 md:pt-40 lg:pt-52">
      <div className="container max-w-6xl text-center gap-3 mx-auto px-4">
        <div className="inline-flex items-end gap-2 sm:gap-4">
          <span className="text-primary text-xl font-mono font-bold">05.</span>
          <span className="text-foreground text-2xl font-bold sm:text-3xl line-clamp-1">{contact.title}</span>
        </div>

        <div className="mt-6 mb-40">
          <p className="max-w-xl m-auto text-muted-foreground leading-relaxed text-lg">{contact.description}</p>
          <div className="mt-6 flex flex-col gap-3 items-center max-w-62.5 m-auto sm:flex-row sm:max-w-lg">
            {SOCIALS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                className={twMerge(
                  "w-full px-4 py-2 inline-flex items-center justify-center gap-x-3 text-xs border border-primary rounded-md min-[425px]:px-6 min-[425px]:py-3",
                  link.label === "Enviar e-mail" && "bg-primary text-background",
                )}
              >
                <link.Icon className="size-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
