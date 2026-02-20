import { ExperienceCardProps } from "@/types/cards/exp-card";
import { ChevronRight } from "lucide-react";

export function ExperienceCard({ title, subtitle, description, duration }: ExperienceCardProps) {
  return (
    <div className="container max-w-4xl py-10 px-6 bg-card border border-border rounded-md hover:border-primary/50 transition-colors duration-300">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:items-center sm:flex-row sm:justify-between">
          <span className="text-xl font-semibold text-foreground">{title}</span>
          <span className="w-fit text-primary text-xs bg-transparent border border-primary/50 rounded-md py-px px-2">
            {duration}
          </span>
        </div>
        <span className="text-primary font-medium text-sm">{subtitle}</span>

        <ul className="flex flex-col gap-2">
          {description.map((item) => (
            <li key={item} className="inline-flex items-start sm:items-center">
              <ChevronRight className="size-4 shrink-0 stroke-primary mt-1 sm:mt-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
