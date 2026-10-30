"use client";

import { animate } from "motion/react";
import { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "./use-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

interface EyebrowProps {
  children: string;
  tone?: "light" | "dark";
  // Sur le premier écran : animation CSS sans attendre le défilement.
  intro?: boolean;
  className?: string;
}

// Petit titre : un filet bleu poudré se dessine et les lettres se resserrent à l'apparition.
export function Eyebrow({ children, tone = "light", intro = false, className }: EyebrowProps) {
  const root = useRef<HTMLParagraphElement>(null);
  const build = useCallback((el: HTMLParagraphElement) => {
    const line = el.querySelector<HTMLElement>(".eyebrow-line");
    const text = el.querySelector<HTMLElement>(".eyebrow-text");
    return {
      hide: () => {
        if (line) line.style.transform = "scaleX(0)";
        if (text) {
          text.style.opacity = "0";
          text.style.letterSpacing = "0.32em";
        }
      },
      show: () => {
        if (line) animate(line, { scaleX: 1 }, { duration: 1, ease: EASE, delay: 0.1 });
        if (text) animate(text, { opacity: 1, letterSpacing: "0.22em" }, { duration: 1.2, ease: EASE });
      },
    };
  }, []);
  useReveal(root, build, intro);

  return (
    <p
      ref={root}
      className={cn(
        "inline-flex items-center gap-3.5 text-[13px] uppercase",
        tone === "dark" ? "text-bleu-1" : "text-bleu-gris",
        intro && "eyebrow-intro",
        className,
      )}
    >
      <span className={cn("eyebrow-line", tone === "dark" && "bg-bleu-1")} aria-hidden="true" />
      <span className="eyebrow-text tracking-[0.22em]">{children}</span>
    </p>
  );
}
