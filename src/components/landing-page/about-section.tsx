import { useLanguage } from "@/hooks/use-language";
import { TextHighlight } from "@/utils/text-highlight";

export function AboutSection() {
  const { currentLanguage, currentData } = useLanguage();
  const about = currentData.about;

  return (
    <section id="about" className="pt-24 sm:pt-32 md:pt-40 lg:pt-52">
      <div className="container max-w-6xl flex flex-col gap-3 mx-auto px-4 min-[425px]:px-10">
        <div className="inline-flex items-end gap-2 sm:gap-4">
          <span className="text-primary text-xl font-mono font-bold">01.</span>
          <h3 className="text-foreground text-2xl font-bold sm:text-3xl">{about.title}</h3>
          <div className="flex-1 h-px bg-border self-center max-w-xs" />
        </div>

        <div className="mt-6 max-w-3xl space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            <TextHighlight
              text={about.description[0]}
              replacement={{
                course: (
                  <span key={"course"} className="text-foreground">
                    {currentLanguage === "pt-br"
                      ? "Desenvolvimento de Software Multiplataforma"
                      : "Multiplatform Software Development"}
                  </span>
                ),
                college: (
                  <span key={"college"} className="text-foreground">
                    Fatec
                  </span>
                ),
              }}
            />
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">{about.description[1]}</p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <TextHighlight
              text={about.description[2]}
              replacement={{
                backend: (
                  <span key={"backend"} className="text-primary">
                    Backend
                  </span>
                ),
                frontend: (
                  <span key={"frontend"} className="text-primary">
                    Frontend
                  </span>
                ),
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
