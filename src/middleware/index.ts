import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context: any, next) => {
  return next();
};
