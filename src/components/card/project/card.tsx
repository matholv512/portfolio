import { ProjectCardProps } from "@/types/cards/project-card";
import Link from "next/link";

export function ProjectCard({ title, subtitle, description, tags, status, links }: ProjectCardProps) {
  return (
    <div className="container max-w-4xl py-10 px-6 bg-card border border-border rounded-md hover:border-primary/50 transition-colors duration-300">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <span className="text-xl font-semibold text-foreground">{title}</span>
          {status && (
            <span className="w-fit text-primary text-xs bg-primary/20 border border-primary/50 rounded-md py-px px-2 my-auto hover:bg-primary/20">
              {status}
            </span>
          )}
        </div>
        <span className="text-sm font-medium text-foreground">{subtitle}</span>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-secondary text-xs py-1 px-2 rounded-full">
              {tag}
            </span>
          ))}
        </ul>

        <div className="pt-5 flex items-end gap-10">
          {links.map(({ Icon, ...link }) => (
            <Link
              key={link.label}
              target="_blank"
              {...link}
              className="inline-flex items-end gap-1 text-muted-foreground hover:text-primary"
            >
              <Icon className="size-6" />
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
