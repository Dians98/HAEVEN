import Link from "next/link";
import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { localePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/en";

export function SiteFooter({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = [
    { label: dict.nav.services, href: localePath(lang, "services/") },
    { label: dict.nav.shop, href: "#" },
    { label: dict.nav.universe, href: "#" },
    { label: dict.nav.contact, href: "#contact" },
  ];
  return (
    <footer>
      <Container className="flex flex-col gap-10 pt-14 pb-8 sm:flex-row sm:items-start sm:justify-between">
        <Link
          href={localePath(lang)}
          aria-label={dict.common.homeLabel}
          className="flex min-h-11 items-center gap-3.5 self-start"
        >
          <Logo className="h-[34px] w-7 text-poudre" />
          <span className="font-serif text-xl font-medium tracking-[0.24em]">HAEVEN</span>
        </Link>
        <nav aria-labelledby="footer-nav-title" className="flex flex-col gap-3">
          <h2
            id="footer-nav-title"
            className="text-[13px] font-sans tracking-[0.22em] text-bleu-gris uppercase"
          >
            {dict.footer.navTitle}
          </h2>
          <ul className="flex flex-col text-[15px] text-gris">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-10 items-center bg-[linear-gradient(currentColor,currentColor)] bg-size-[0_1px] bg-position-[left_75%] bg-no-repeat transition-[background-size,color] duration-500 ease-haeven hover:bg-size-[100%_1px] hover:text-bleu-gris"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container>
        <div className="border-t border-filet py-6">
          <small className="text-sm text-gris">{dict.footer.rights}</small>
        </div>
      </Container>
    </footer>
  );
}
