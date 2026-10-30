import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/motion/eyebrow";
import { TextLink } from "@/components/common/text-link";
import type { Dictionary } from "@/dictionaries/en";
import { Dust } from "./dust";
import { HeroVideo } from "./hero-video";
import { Sparks } from "./sparks";
import { WelcomeScroll } from "./welcome-scroll";
import type { CSSProperties } from "react";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

// Lettres masquées aux lecteurs d'écran ; le texte complet est lu via sr-only.
function Letters({ text, start }: { text: string; start: number }) {
  let n = 0;
  return text.split(" ").map((word, w) => (
    <span key={w}>
      {w > 0 && " "}
      <span className="inline-block whitespace-nowrap">
        {Array.from(word).map((ch, i) => (
          <span key={i} className="letter" style={delay(start + 0.03 * n++)}>
            {ch}
          </span>
        ))}
      </span>
    </span>
  ));
}

export function Welcome({ dict }: { dict: Dictionary }) {
  const w = dict.home.welcome;
  return (
    <WelcomeScroll
      media={
        <>
          <HeroVideo src="/videos/cover.mp4" poster="/videos/cover-poster.jpg" />
          <div className="cover-veil absolute inset-0" />
          <Dust />
        </>
      }
      frame={
        <>
          <span className="frame-line frame-t" />
          <span className="frame-line frame-r" />
          <span className="frame-line frame-b" />
          <span className="frame-line frame-l" />
        </>
      }
      stars={<Sparks />}
    >
      <span aria-hidden="true" className="logo-mask logo-intro h-11 w-[37px]" style={delay(0.2)} />
      <div style={delay(0.45)}>
        <Eyebrow tone="dark" intro className="relative">
          {w.eyebrow}
        </Eyebrow>
      </div>
      <p className="relative font-serif text-[clamp(48px,min(11.5vw,16svh),176px)] leading-[0.95] tracking-[-0.025em]">
        <span className="sr-only">{w.before} </span>
        <span aria-hidden="true">
          <Letters text={w.before} start={0.7} />
        </span>{" "}
        <em className="shimmer curtain">{w.brand}</em>
      </p>
      <div className="rise relative flex flex-wrap items-center justify-center gap-x-8 gap-y-4" style={delay(1.7)}>
        <Button asChild>
          <a href="#contact">{dict.common.start}</a>
        </Button>
        <TextLink href="#about" tone="dark">
          {w.explore}
        </TextLink>
      </div>
      <span aria-hidden="true" className="scroll-cue absolute bottom-7 left-1/2 h-14 w-px overflow-hidden bg-ivoire/25" />
    </WelcomeScroll>
  );
}
