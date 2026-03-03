import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Configuration object for the middleware.
 *
 * @type {Object}
 * @property {string[]} matcher - An array of regular expressions to match protected paths.
 */

export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

export default async function handleAuthenticationMiddleware(req: NextRequest) {
	let res = NextResponse.next({
		request: {
			headers: req.headers,
		},
	});

	const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!url || !anonKey) return res;

	const supabase = createServerClient(url, anonKey, {
		cookies: {
			getAll() {
				return req.cookies.getAll();
			},
			setAll(cookiesToSet) {
				cookiesToSet.forEach(({ name, value, options }) => {
					res.cookies.set(name, value, options);
				});
			},
		},
	});

	// Refresh session cookies if needed.
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const pathname = req.nextUrl.pathname;

	const authPages = pathname.startsWith("/auth");
	const protectedPaths = [
		"/builder",
		"/conversation",
		"/payment",
		"/monetization",
	];
	const isProtected = protectedPaths.some(p => pathname.startsWith(p));

	if (user && authPages) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	}

	if (!user && isProtected) {
		const loginUrl = new URL("/auth/login", req.nextUrl);
		loginUrl.searchParams.set("redirectPath", pathname);
		return NextResponse.redirect(loginUrl);
	}
	console.log("pathname", pathname)
	return res;
}
