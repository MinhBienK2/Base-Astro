import { supportedLanguages, type Language } from 'common/constants';

export function getSupportedLanguages(langExclude?: Language[]) {
  if (!langExclude?.length) return supportedLanguages;

  return supportedLanguages.filter(l => !langExclude?.some(le => le === l));
}
