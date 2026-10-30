"use client";

import { animate } from "motion/react";
import { Fragment, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "./use-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

interface HeadlineWordsProps {
  words: string;
  emphasis: string;
  className?: string;
}

// Titre révélé mot par mot ; la fin de la phrase est en italique dans la couleur d'accent.
export function HeadlineWords({ words, emphasis, className }: HeadlineWordsProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const build = useCallback((el: HTMLHeadingElement) => {
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    return {
      hide: () => {
        for (const s of spans) {
          s.style.opacity = "0";
          s.style.transform = "translateY(20px)";
        }
      },
      show: () => {
        spans.forEach((s, i) => {
          animate(s, { opacity: 1, y: 0 }, { duration: 0.9, ease: EASE, delay: i * 0.08 });
        });
      },
    };
  }, []);
  useReveal(ref, build);

  const render = (text: string) =>
    text.split(" ").map((w, i, all) => (
      <Fragment key={`${w}-${i}`}>
        <span data-w className="inline-block">
          {w}
        </span>
        {i < all.length - 1 ? " " : null}
      </Fragment>
    ));

  return (
    <h1 ref={ref} className={cn(className)}>
      {render(words)} <em className="text-bleu-gris">{render(emphasis)}</em>
    </h1>
  );
}
