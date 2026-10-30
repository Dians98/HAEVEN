"use client";

import { useEffect, type RefObject } from "react";

export interface RevealTarget {
  hide: () => void;
  show: () => void;
}

// Cache l'élément seulement s'il est sous la ligne de flottaison, puis le montre une fois au défilement.
// Rien n'est caché côté serveur ni avec "réduire les animations".
export function useReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  build: (el: T) => RevealTarget,
  disabled = false,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    const target = build(el);
    target.hide();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          target.show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, build, disabled]);
}
