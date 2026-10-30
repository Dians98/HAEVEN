import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/providers";
import { cormorant, dmSans } from "@/lib/fonts";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={cn(cormorant.variable, dmSans.variable)}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ivoire focus:px-4 focus:py-3 focus:text-anthracite"
        >
          {dict.common.skip}
        </a>
        <MotionProvider>
          <SiteHeader lang={lang} dict={dict} />
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <SiteFooter lang={lang} dict={dict} />
        </MotionProvider>
      </body>
    </html>
  );
}
