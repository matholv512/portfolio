import { ChevronRight } from "lucide-react";
import { TECNOLOGIES } from "./constants";
import { useLanguage } from "@/hooks/use-language";

export function TechnologiesSection() {
  const { currentData } = useLanguage();
  const technologies = currentData.technologies;

  return (
    <section id="technologies" className="pt-24 sm:pt-32 md:pt-40 lg:pt-52">
      <div className="container max-w-6xl flex flex-col gap-3 mx-auto px-4 min-[425px]:px-10">
        <div className="inline-flex items-end gap-2 sm:gap-4">
          <span className="text-primary text-xl font-mono font-bold">04.</span>
          <h6 className="text-foreground text-2xl font-bold sm:text-3xl line-clamp-1">{technologies.title}</h6>
          <div className="flex-1 max-w-xs h-px bg-border self-center" />
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-6 sm:gap-14 sm:flex-row">
            {Object.entries(TECNOLOGIES).map(([category, stack]) => (
              <ul key={category} className="w-full max-w-65 flex flex-col gap-3 sm:gap-4">
                <li className="text-lg text-foreground font-semibold border-b border-border pb-2">{category}</li>
                {stack.map((technology) => (
                  <li key={technology} className="inline-flex items-center">
                    <ChevronRight className="size-4 stroke-primary shrink-0" />
                    <span className="text-muted-foreground hover:text-primary">{technology}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
