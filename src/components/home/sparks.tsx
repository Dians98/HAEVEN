"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Huit étoiles : position, taille, teinte, durée et profondeur (déplacement max à la souris, en px).
const sparks = [
  { pos: "left-[9%] top-[24%] size-4", dur: "3.8s", depth: 16 },
  { pos: "left-[22%] top-[68%] size-2.5", light: true, dur: "4.6s", depth: 7 },
  { pos: "left-[36%] top-[14%] size-3", dur: "5s", depth: 10 },
  { pos: "left-[58%] top-[78%] size-3.5", light: true, dur: "4.2s", depth: 13 },
  { pos: "left-[71%] top-[18%] size-[18px]", dur: "4.8s", depth: 18 },
  { pos: "left-[86%] top-[62%] size-[11px]", light: true, dur: "3.6s", depth: 6 },
  { pos: "left-[93%] top-[26%] size-[9px]", dur: "5.2s", depth: 4 },
  { pos: "left-[47%] top-[86%] size-[9px]", light: true, dur: "4.4s", depth: 5 },
];

// Les étoiles s'allument une à une après l'entrée, puis suivent doucement la souris.
export function Sparks() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(el.children) as HTMLElement[];
    const cur = items.map(() => ({ x: 0, y: 0 }));
    const target = { x: 0, y: 0 };
    let raf = 0;
    let last = 0;
    let visible = true;

    const tick = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000 || 0.016);
      last = t;
      let moving = false;
      items.forEach((node, i) => {
        const d = sparks[i].depth;
        const k = 1 - Math.exp(-dt / (0.35 + d * 0.02));
        const c = cur[i];
        const dx = target.x * d - c.x;
        const dy = target.y * d - c.y;
        c.x += dx * k;
        c.y += dy * k;
        if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) moving = true;
        node.style.transform = `translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0)`;
      });
      raf = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf && visible) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(el);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={root} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {sparks.map((s, i) => (
        <span key={i} className={cn("absolute block", s.pos)}>
          <span
            className={cn("spark inset-0", s.light && "text-bleu-1")}
            style={{ animationDuration: s.dur, animationDelay: `${(1.4 + i * 0.14).toFixed(2)}s` }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8Z" fill="currentColor" />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
