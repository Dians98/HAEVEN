import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TextLinkProps {
  href?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  arrow?: boolean;
  className?: string;
}

// Lien texte au soulignement qui se dessine ; sans href, rendu en span (dans une carte déjà cliquable).
export function TextLink({ href, children, tone = "light", arrow = true, className }: TextLinkProps) {
  const classes = cn("txtlink", tone === "dark" && "txtlink-dark", className);
  const content = (
    <>
      {children}
      {arrow ? <ArrowRight className="arrow size-4" strokeWidth={1.5} aria-hidden="true" /> : null}
    </>
  );
  return href === undefined ? (
    <span className={classes}>{content}</span>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
