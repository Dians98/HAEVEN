import { Container } from "@/components/common/container";
import { TextLink } from "@/components/common/text-link";
import { HeadlineWords } from "@/components/motion/headline-words";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/dictionaries/en";

export function Statement({ dict }: { dict: Dictionary }) {
  const s = dict.home.statement;
  return (
    <section id="about" className="py-[clamp(88px,12vw,180px)]">
      <Container className="grid items-end gap-x-[clamp(32px,6vw,96px)] gap-y-12 min-[861px]:grid-cols-[1.6fr_1fr]">
        <HeadlineWords
          words={s.words}
          emphasis={s.emphasis}
          className="text-[clamp(46px,6.6vw,104px)] leading-[1.02] tracking-[-0.02em]"
        />
        <div className="flex flex-col gap-6 pb-3">
          <Reveal as="p" delay={0.16} className="max-w-[34em] text-[clamp(18px,1.5vw,20px)] text-gris-fonce">
            {s.lead}
          </Reveal>
          <Reveal delay={0.24} className="self-start">
            <TextLink href="#contact">{dict.common.start}</TextLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
