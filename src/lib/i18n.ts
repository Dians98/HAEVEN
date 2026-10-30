import { en, type Dictionary } from "@/dictionaries/en";
import { fr } from "@/dictionaries/fr";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LANG_STORAGE_KEY = "haeven-lang";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

export function localePath(lang: Locale, path = ""): string {
  return `/${lang}/${path}`;
}
