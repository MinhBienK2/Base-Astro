/** @type {import('astro-i18next').AstroI18nextConfig} */

// @type {import { supportedLanguages } from './src/i18n'; }
import { supportedLanguages } from './src/common/constants.ts';

export default {
  defaultLocale: 'en',
  locales: supportedLanguages,
  namespaces: ['home', 'about'],
  defaultNamespace: 'home',
};
