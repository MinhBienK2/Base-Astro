import type { MiddlewareHandler } from 'astro';
import { supportedLanguages } from 'utils/i18n';

export const onRequest: MiddlewareHandler = async (context: any, next) => {
  const url = new URL(context.request.url);
  const pathParts = url.pathname.split('/').filter(Boolean); // Bỏ phần tử rỗng

  const isLangRoute = pathParts.length > 0 && supportedLanguages.includes(pathParts[0]);

  if (!isLangRoute) {
    return next();
  }

  const lang = pathParts[0];
  context.params.lang = lang;
  context.locals.lang = lang;

  return next();
};
