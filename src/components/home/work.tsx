import Link from "next/link";
import { Container } from "@/components/common/container";
import { Media } from "@/components/common/media";
import { TextLink } from "@/components/common/text-link";
import { Eyebrow } from "@/components/motion/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/dictionaries/en";
import { homeMedia } from "@/lib/media";

const tones = ["bg-bleu-2", "bg-bleu-1", "bg-bleu-3", "bg-bleu-4"];

export function Work({ dict }: { dict: Dictionary }) {
  const w = dict.home.work;
  return (
    <section className="border-t border-filet-2 py-[clamp(80px,10vw,140px)]">
      <Container className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>{w.eyebrow}</Eyebrow>
          <Reveal as="h2" delay={0.08} className="text-[clamp(36px,4.2vw,58px)] leading-[1.08] tracking-[-0.01em]">
            {w.title}
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <TextLink href="#">{w.all}</TextLink>
        </Reveal>
      </Container>
      <div className="rail" role="region" aria-label={w.railLabel} tabIndex={0}>
        {tones.map((tone, i) => (
          <Link key={i} href="#" className="group">
            <Reveal delay={i * 0.08} className="flex flex-col gap-3.5">
              <Media
                photo={homeMedia.projects[i]}
                alt={w.alt[i]}
                tone={tone}
                sizes="(min-width: 1100px) 380px, 70vw"
                className="aspect-[4/5]"
              />
              <div>
                <div className="font-serif text-2xl leading-tight font-medium">{w.projectName}</div>
                <div className="text-sm text-gris">{w.meta}</div>
              </div>
            </Reveal>
          </Link>
        ))}
      </div>
    </section>
  );
}
