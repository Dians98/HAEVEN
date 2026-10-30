import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/layout/cta-banner";
import { Statement } from "@/components/home/statement";
import { Universe } from "@/components/home/universe";
import { Welcome } from "@/components/home/welcome";
import { Ways } from "@/components/home/ways";
import { Work } from "@/components/home/work";
import { getDictionary, hasLocale, localePath, locales } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  const url = `${SITE_URL}${localePath(lang)}`;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}${localePath("en")}`,
        fr: `${SITE_URL}${localePath("fr")}`,
        "x-default": `${SITE_URL}${localePath("en")}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: meta.title,
      description: meta.description,
      url,
      locale: meta.ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => getDictionary(l).meta.ogLocale),
      images: [{ url: "/images/terrasse-3d.jpg", width: 1125, height: 900, alt: meta.ogImageAlt }],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: `${SITE_URL}${localePath(lang)}`,
    description: dict.meta.description,
    serviceType: lang === "fr" ? "Design d'intérieur" : "Interior design",
    knowsLanguage: ["en", "fr"],
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Welcome dict={dict} />
      <Statement dict={dict} />
      <Ways lang={lang} dict={dict} />
      <Work dict={dict} />
      <Universe dict={dict} />
      <CtaBanner title={dict.home.final.title} text={dict.home.final.text} button={dict.common.start} />
    </>
  );
}
