import { ReactNode } from "react";

interface TextHighlightProps {
  text: string;
  replacement: Record<string, ReactNode>;
}

export function TextHighlight({ text, replacement }: TextHighlightProps) {
  const parts = text.split(/(\{.*?\})/g);

  return (
    <>
      {parts.map((part) => {
        const key = part.replace(/[{}]/g, "");
        return replacement[key] ?? part;
      })}
    </>
  );
}
