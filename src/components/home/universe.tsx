import Link from "next/link";
import { Container } from "@/components/common/container";
import { Media } from "@/components/common/media";
import { TextLink } from "@/components/common/text-link";
import { Eyebrow } from "@/components/motion/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/dictionaries/en";
import { homeMedia } from "@/lib/media";

export function Universe({ dict }: { dict: Dictionary }) {
  const u = dict.home.universe;
  return (
    <section className="on-dark bg-bleu-gris py-[clamp(64px,9vw,128px)] text-ivoire">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div className="flex flex-col">
            <Eyebrow tone="dark">{u.eyebrow}</Eyebrow>
            <Reveal as="h2" delay={0.08} className="mt-3.5 text-[clamp(36px,4.2vw,58px)] leading-[1.08] tracking-[-0.01em]">
              {u.title} <em className="text-bleu-1">{u.emphasis}</em>
            </Reveal>
            <Reveal as="p" delay={0.16} className="mt-4 max-w-[32em] text-lg text-ivoire/90">
              {u.text}
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <TextLink href="#" tone="dark">
              {u.link}
            </TextLink>
          </Reveal>
        </div>
        <div className="grid gap-6 min-[761px]:grid-cols-3">
          {u.items.map((item, i) => (
            <Link key={item.title} href="#" className="group">
              <Reveal delay={i * 0.08} className="flex flex-col gap-3.5">
                <Media
                  photo={homeMedia.vignettes[i]}
                  alt={item.alt}
                  tone="bg-bleu-gris-moyen"
                  sizes="(min-width: 761px) 33vw, 100vw"
                  className="aspect-[4/3]"
                />
                <span className="font-serif text-2xl font-medium">{item.title}</span>
              </Reveal>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
