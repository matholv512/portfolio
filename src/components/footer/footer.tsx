import { useLanguage } from "@/hooks/use-language";
import { SOCIALS } from "../landing-page/constants";

export default function Footer() {
  const { currentData } = useLanguage();
  const footer = currentData.footer;

  return (
    <footer className="w-full border-t border-border py-10">
      <div className="space-y-4">
        <div className="flex justify-center gap-6">
          {SOCIALS.map((social) => (
            <a key={social.href} href={social.href} target={social.target}>
              <social.Icon className="size-5 hover:stroke-primary" />
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground font-mono">
          <span>{footer.title}</span>
        </div>
      </div>
    </footer>
  );
}
