export enum Language {
  en = 'en',
  es = 'es',
  pt = 'pt',
  jp = 'jp',
  vn = 'vn',
  th = 'th',
  id = 'id',
  hk = 'hk',
  tw = 'tw',
}

export const supportedLanguages: Language[] = [
  Language.en,
  Language.es,
  Language.pt,
  Language.jp,
  Language.vn,
  Language.th,
  Language.id,
  Language.hk,
  Language.tw,
];

export function getSupportedLanguages(langExclude?: Language[]) {
  if (!langExclude?.length) return supportedLanguages;

  return supportedLanguages.filter(l => !langExclude?.some(le => le === l));
}

export async function languageStaticPaths() {
  return supportedLanguages.map(lang => ({
    params: { lang },
    props: { lang },
  }));
}
