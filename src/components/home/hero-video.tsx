"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Connection = EventTarget & { saveData?: boolean };

const connection = () => (navigator as Navigator & { connection?: Connection }).connection;

function subscribe(notify: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const conn = connection();
  mq.addEventListener("change", notify);
  conn?.addEventListener("change", notify);
  return () => {
    mq.removeEventListener("change", notify);
    conn?.removeEventListener("change", notify);
  };
}

// Pas de lecture avec « réduire les animations » ni en économie de données : le poster seul reste.
function canPlay() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !connection()?.saveData;
}

export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const play = useSyncExternalStore(subscribe, canPlay, () => false);
  const [ready, setReady] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  // Pause quand l'écran d'accueil sort de la vue.
  useEffect(() => {
    const v = video.current;
    const el = box.current;
    if (!play || !v || !el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [play]);

  return (
    <div ref={box} className="absolute inset-0">
      <Image src={poster} alt="" fill priority unoptimized sizes="100vw" className="object-cover" />
      {play && (
        <video
          ref={video}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setReady(true)}
          className={cn(
            "absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-[1800ms] ease-haeven",
            ready && "opacity-100",
          )}
        />
      )}
    </div>
  );
}
