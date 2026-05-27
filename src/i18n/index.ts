import { en } from './en';
import { es } from './es';
import type { TranslationShape } from './en';

export type Locale = 'en' | 'es';
export type Translations = TranslationShape;

const dict: Record<Locale, Translations> = { en, es };

export function useTranslations(locale: Locale): Translations {
  return dict[locale];
}
