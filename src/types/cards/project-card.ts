import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  status?: string;
  description: string;
  tags: string[];
  links: {
    label: string;
    href: string;
    Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  }[];
}
