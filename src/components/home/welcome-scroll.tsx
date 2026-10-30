"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

interface WelcomeScrollProps {
  media: ReactNode;
  frame: ReactNode;
  stars: ReactNode;
  children: ReactNode;
}

// Sortie au défilement : le contenu rapetisse et s'estompe, le cadre se resserre, le fond glisse plus lentement.
export function WelcomeScroll({ media, frame, stars, children }: WelcomeScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Les styles restent toujours branchés (même rendu serveur et client) ; en mouvement réduit, ils ne bougent pas.
  const p = (v: number) => (reduce ? 0 : v);
  const mediaY = useTransform(scrollYProgress, (v) => `${p(v) * 12}%`);
  const frameScale = useTransform(scrollYProgress, (v) => 1 - p(v) * 0.015);
  const scale = useTransform(scrollYProgress, (v) => 1 - Math.min(p(v) / 0.6, 1) * 0.08);
  const y = useTransform(scrollYProgress, (v) => Math.min(p(v) / 0.6, 1) * -56);
  const opacity = useTransform(scrollYProgress, (v) => 1 - Math.min(p(v) / 0.55, 1));

  return (
    <section
      ref={ref}
      className="on-dark relative isolate flex h-screen min-h-[520px] supports-[height:100svh]:h-svh overflow-hidden bg-bleu-gris px-[clamp(12px,2vw,28px)] pt-24 pb-[clamp(12px,2vw,28px)] text-ivoire"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: mediaY }}
        className="absolute inset-x-0 -top-[15%] -z-10 h-[115%]"
      >
        {media}
      </motion.div>
      <div className="relative flex flex-1">
        <motion.div
          aria-hidden="true"
          style={{ scale: frameScale }}
          className="pointer-events-none absolute inset-0"
        >
          {frame}
        </motion.div>
        {stars}
        <motion.div
          style={{ scale, y, opacity }}
          className="relative flex flex-1 flex-col items-center justify-center gap-[clamp(14px,3.6svh,32px)] px-5 py-[clamp(12px,4svh,48px)] text-center"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
