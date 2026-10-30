"use client";

import { animate } from "motion/react";
import { useCallback, useRef, type ElementType, type ReactNode } from "react";
import { useReveal } from "./use-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
}

// Fondu et légère montée, une seule fois, au premier passage dans l'écran.
export function Reveal({ children, as: Tag = "div", className, delay = 0, y = 20 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const build = useCallback(
    (el: HTMLElement) => ({
      hide: () => {
        el.style.opacity = "0";
        el.style.transform = `translateY(${y}px)`;
      },
      show: () => {
        animate(el, { opacity: 1, y: 0 }, { duration: 0.9, ease: EASE, delay }).then(() => {
          el.style.opacity = "";
          el.style.transform = "";
        });
      },
    }),
    [y, delay],
  );
  useReveal(ref, build);
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
