"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/common/container";
import { LANG_STORAGE_KEY, localePath, locales, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/en";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  lang: Locale;
  dict: Dictionary;
}

const navLink =
  "flex min-h-11 items-center bg-[linear-gradient(currentColor,currentColor)] bg-size-[0_1px] bg-position-[left_75%] bg-no-repeat transition-[background-size,color] duration-500 ease-haeven hover:bg-size-[100%_1px]";

function rememberLang(code: Locale) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, code);
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour la page seulement.
  }
}

function LanguageSwitch({
  lang,
  dict,
  pathname,
}: SiteHeaderProps & { pathname: string }) {
  return (
    <div role="group" aria-label={dict.header.language} className="flex gap-0.5 text-[13px] tracking-[0.12em]">
      {locales.map((code) => {
        const active = code === lang;
        const target = pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${code}`);
        return (
          <Link
            key={code}
            href={target.endsWith("/") ? target : `${target}/`}
            lang={code}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
            aria-label={`${code.toUpperCase()}, ${dict.header.switchTo[code]}`}
            onClick={() => rememberLang(code)}
            className={cn(
              "flex min-h-11 min-w-10 items-center justify-center decoration-poudre decoration-2 underline-offset-[6px] transition-opacity duration-300",
              active ? "font-medium underline" : "opacity-60 hover:opacity-100",
            )}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

export function SiteHeader({ lang, dict }: SiteHeaderProps) {
  const pathname = usePathname() ?? `/${lang}/`;
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  const overlay = isHome && !scrolled;

  const items = [
    { label: dict.nav.services, href: localePath(lang, "services/") },
    { label: dict.nav.shop, href: "#" },
    { label: dict.nav.portfolio, href: "#" },
    { label: dict.nav.universe, href: "#" },
    { label: dict.nav.about, href: "#" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,color] duration-500 ease-haeven",
        isHome ? "fixed" : "sticky",
        overlay
          ? "on-dark border-transparent bg-transparent text-ivoire"
          : "border-filet/70 bg-ivoire/70 text-anthracite backdrop-blur-xl backdrop-saturate-150",
        !isHome && !scrolled && "border-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-6 transition-[padding] duration-500 ease-haeven",
          scrolled ? "py-4" : "py-5",
        )}
      >
        <Link href={localePath(lang)} aria-label={dict.common.homeLabel} className="flex min-h-11 items-center gap-3.5">
          <Logo
            className={cn(
              "transition-[width,height] duration-500 ease-haeven",
              overlay ? "text-ivoire" : "text-poudre",
              scrolled ? "h-10 w-[33px]" : "h-11 w-9",
            )}
          />
          <span
            className={cn(
              "font-serif font-medium tracking-[0.24em]",
              scrolled ? "text-[22px] min-[981px]:text-[26px]" : "text-[22px] min-[981px]:text-[28px]",
            )}
          >
            HAEVEN
          </span>
        </Link>

        <div className="flex items-center gap-7 max-[980px]:gap-2">
          <nav
            aria-label={dict.nav.label}
            className={cn("flex gap-6 text-[15px] max-[980px]:hidden", overlay ? "text-ivoire/85" : "text-gris-fonce")}
          >
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(navLink, overlay ? "hover:text-ivoire" : "hover:text-bleu-gris")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" className="max-[980px]:hidden">
            <a href="#contact">{dict.common.start}</a>
          </Button>
          <LanguageSwitch lang={lang} dict={dict} pathname={pathname} />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={dict.header.openMenu} className="min-[981px]:hidden">
                <Menu className="size-6" strokeWidth={1.25} aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" closeLabel={dict.header.closeMenu} className="gap-8 p-6 text-anthracite">
              <SheetTitle className="font-serif text-2xl font-medium tracking-[0.24em]">HAEVEN</SheetTitle>
              <SheetDescription className="sr-only">{dict.header.menuDescription}</SheetDescription>
              <nav aria-label={dict.nav.label} className="flex flex-col font-serif text-3xl">
                {items.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link href={item.href} className="flex min-h-12 items-center border-b border-filet text-anthracite">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild>
                  <a href="#contact">{dict.common.start}</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
