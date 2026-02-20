import { useLanguage } from "@/hooks/use-language";
import { ExperienceCard } from "../card/experience/card";

export function ExperienceSection() {
  const { currentData } = useLanguage();
  const experience = currentData.experience;

  return (
    <section id="experience" className="pt-24 sm:pt-32 md:pt-40 lg:pt-52">
      <div className="container max-w-6xl flex flex-col gap-3 mx-auto px-4 min-[425px]:px-10">
        <div className="inline-flex items-end gap-2 sm:gap-4">
          <span className="text-primary text-xl font-mono font-bold">02.</span>
          <h4 className="text-foreground text-2xl font-bold sm:text-3xl line-clamp-1">{experience.title}</h4>
          <div className="flex-1 max-w-xs h-px bg-border self-center" />
        </div>

        <div className="mt-6">
          {experience.cards.map(({ title, subtitle, description, duration }) => (
            <ExperienceCard
              key={title}
              title={title}
              subtitle={subtitle}
              duration={duration}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
