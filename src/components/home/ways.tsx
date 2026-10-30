import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { TextLink } from "@/components/common/text-link";
import { Eyebrow } from "@/components/motion/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/dictionaries/en";
import { homeMedia, type Photo } from "@/lib/media";
import { localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface PanelProps {
  href: string;
  num: string;
  title: string;
  text: string;
  link: string;
  alt: string;
  photo?: Photo;
  tone: string;
}

// Une photo impose un texte ivoire sur voile sombre ; sans photo, le texte suit la teinte de l'aplat.
function Panel({ href, num, title, text, link, alt, photo, tone }: PanelProps) {
  const dark = Boolean(photo) || tone === "bg-bleu-gris-moyen";
  return (
    <Link href={href} className={cn("panel group", tone, dark ? "text-ivoire" : "text-anthracite")}>
      {photo ? (
        <>
          <Image
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={alt}
            sizes="(min-width: 861px) 40vw, 100vw"
            className="absolute inset-0 size-full object-cover transition-transform duration-1600 ease-haeven group-hover:scale-105"
            style={{ objectPosition: photo.position }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-1 bg-linear-to-t from-anthracite/85 from-10% via-anthracite/45 via-55% to-transparent"
          />
        </>
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0" />
      )}
      <div className="relative z-2 flex flex-col gap-2.5">
        <span className={cn("font-serif text-[26px] leading-none italic", dark ? "text-bleu-1" : "text-bleu-gris")}>
          {num}
        </span>
        <h3 className="text-[clamp(32px,3vw,44px)] leading-[1.05] font-medium">{title}</h3>
        <div className="more">
          <div className="flex max-w-[30em] flex-col gap-2 overflow-hidden">
            <p>{text}</p>
            <TextLink tone={dark ? "dark" : "light"} className="self-start">
              {link}
            </TextLink>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Ways({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const w = dict.home.ways;
  const [services, shop, universe] = w.items;
  return (
    <section className="pb-[clamp(88px,12vw,160px)]">
      <Container>
        <div className="mb-10 flex flex-col gap-3.5">
          <Eyebrow>{w.eyebrow}</Eyebrow>
          <Reveal as="h2" delay={0.08} className="text-[clamp(36px,4.2vw,58px)] leading-[1.08] tracking-[-0.01em]">
            {w.title}
          </Reveal>
        </div>
        <Reveal delay={0.16} className="panels">
          <Panel
            href={localePath(lang, "services/")}
            num="01"
            title={services.title}
            text={services.text}
            link={services.link}
            alt={services.alt}
            photo={homeMedia.terrasse}
            tone="bg-bleu-gris-moyen"
          />
          <Panel
            href="#"
            num="02"
            title={shop.title}
            text={shop.text}
            link={shop.link}
            alt={shop.alt}
            photo={homeMedia.shop}
            tone="bg-bleu-1"
          />
          <Panel
            href="#"
            num="03"
            title={universe.title}
            text={universe.text}
            link={universe.link}
            alt={universe.alt}
            photo={homeMedia.universe}
            tone="bg-bleu-gris-moyen"
          />
        </Reveal>
      </Container>
    </section>
  );
}
