import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Define supported locales
  locales: ['en', 'ar'],

  // Default locale
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'] // Match all paths except API, _next, and static files
};
