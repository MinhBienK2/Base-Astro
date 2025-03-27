export const supportedLanguages = ['en', 'es', 'pt', 'jp', 'vn', 'th', 'id', 'tw'];

export async function languageStaticPaths() {
  return supportedLanguages.map(lang => ({
    params: { lang },
    props: { lang },
  }));
}

// export function getTranslations(lang) {
// // Fallback nếu không tìm thấy ngôn ngữ
// try {
//   return import(`../locales/${lang}.json`).then(m => m.default);
// } catch {
//   return import(`../locales/en.json`).then(m => m.default);
// }
// }
