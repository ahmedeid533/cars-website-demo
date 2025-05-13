// import { NextRequest, NextResponse } from "next/server";
// import createMiddleware from "next-intl/middleware";

// const publicRoutes = ["/", "/category/:category_name"];
// const protectedRoutes = ["/search", "/profile", "/orders"];
// const authRoutes = ["/signin", "/login"];

// // Function to check if a route matches, including dynamic routes
// const isDynamicRouteMatch = (route: string, path: string) => {
// if (route.includes(":")) {
//     const regex = new RegExp(`^${route.replace(/:\w+/g, "[^/]+")}$`);
//     return regex.test(path);
// }
// return route === path;
// };

// const isProtectedRoute = (path: string) =>
// protectedRoutes.some((route) => isDynamicRouteMatch(route, path));

// const isPublicRoute = (path: string) =>
// publicRoutes.some((route) => isDynamicRouteMatch(route, path));

// const isAuthRoute = (path: string) =>
// authRoutes.some((route) => isDynamicRouteMatch(route, path));

// const intlMiddleware = createMiddleware({
// locales: ["en", "ar"],
// defaultLocale: "en",
// });

// export default function middleware(request: NextRequest, response: NextResponse) {
// const authenticated = request.cookies.get("token")?.value; // Extract token safely
// const url = req.nextUrl;
// const path = url.pathname;

// // Extract locale from path
// const localeMatch = path.match(/^\/(en|ar)(\/|$)/);
// const locale = localeMatch ? localeMatch[1] : "en";
// const normalizedPath = localeMatch ? path.replace(/^\/(en|ar)/, "") || "/" : path;

// const redirectUrl = (destination: string) => new URL(`/${locale}${destination}`, url);

// if (!authenticated && protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
//     return NextResponse.redirect(new URL('/login', request.url));
// } else if (!authenticated && authRoutes.includes(request.nextUrl.pathname)) {
//     return NextResponse.next();
// } else if (authenticated && authRoutes.includes(request.nextUrl.pathname)) {
//     return NextResponse.redirect(new URL('/', request.url));
// }

// // Only apply intlMiddleware if no redirect was made
// return intlMiddleware(req);
// }

// export const config = {
// matcher: ["/((?!api|_next|.*\\..*).*)"], // Ignore API routes, Next.js internals, and static files
// };

import {NextRequest, NextResponse} from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
	locales: [
		"en", "ar"
	],
	defaultLocale: "ar"
});

export function middleware(request : NextRequest) {
	const intlResponse = intlMiddleware(request);

	// Prevent redirect loops
	if (intlResponse.headers.get("Location")) {
		return intlResponse;
	}

	const token = request.cookies.get("token") ?. value;
	const pathname = request.nextUrl.pathname;
	const pathParts = pathname.split("/");
	const locale = pathParts[1]; // Locale comes after intlMiddleware
	const route = "/" + pathParts.slice(2).join("/");

	const protectedRoutes = [
		"/orders",
		"/profile",
		"/search",
		"/cart",
		"/checkout"
	];
	const authRoutes = ["/login", "/signup"];

	// Redirect unauthenticated users from protected routes
	if (! token && protectedRoutes.some((path) => route.startsWith(path))) {
		if (! pathname.startsWith(`/${locale}/login`)) { // Avoid infinite redirects
			return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
		}
	}

	// Redirect authenticated users from auth routes
	if (token && authRoutes.some((path) => route.startsWith(path))) {
		if (pathname !== `/${locale}/`) { // Prevent unnecessary redirects
			return NextResponse.redirect(new URL(`/${locale}/`, request.url));
		}
	}

	return intlResponse;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"]
};
