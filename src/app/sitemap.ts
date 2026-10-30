import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${localePath(l)}`]));
  return locales.map((l) => ({
    url: `${SITE_URL}${localePath(l)}`,
    alternates: { languages },
  }));
}
