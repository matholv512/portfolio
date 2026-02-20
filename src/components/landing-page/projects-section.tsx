import { useLanguage } from "@/hooks/use-language";
import { ProjectCard } from "../card/project/card";

export function ProjectsSection() {
  const { currentData } = useLanguage();
  const projects = currentData.projects;

  return (
    <section id="projects" className="pt-24 sm:pt-32 md:pt-40 lg:pt-52">
      <div className="container max-w-6xl flex flex-col gap-3 mx-auto px-4 min-[425px]:px-10">
        <div className="inline-flex items-end gap-2 sm:gap-4">
          <span className="text-primary text-xl font-mono font-bold">03.</span>
          <h5 className="text-foreground text-2xl font-bold sm:text-3xl line-clamp-1">Projetos</h5>
          <div className="flex-1 max-w-xs h-px bg-border self-center" />
        </div>

        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
