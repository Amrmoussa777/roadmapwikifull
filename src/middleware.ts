import { getUser } from "@/app/auth/services/getUser";
import { NextRequest, NextResponse } from "next/server";

/**
 * Configuration object for the middleware.
 *
 * @type {Object}
 * @property {string[]} matcher - An array of regular expressions to match protected paths.
 */

export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

/**
 * An array of protected paths that require user authentication.
 *
 * @type {string[]}
 */
const protectedPaths = ["/auth"];
const protectedDashboard = ["/create-roadmap"];

export default async function handleAuthenticationMiddleware(req: NextRequest) {
	const accessToken = req.cookies.get("accessToken")?.value;
	const refreshToken = req.cookies.get("refreshToken")?.value;

	/**
	 * User object obtained by fetching user information using the access token.
	 *
	 * @type {Object}
	 */

	const user = await getUser(accessToken, refreshToken);

	/**
	 * Checks if the current request path is protected.
	 *
	 * @type {boolean}
	 */

	const isProtectedPath = protectedPaths.some(route =>
		req.nextUrl.pathname.startsWith(route)
	);
	const isProtectedDashboard = protectedDashboard.some(route =>
		req.nextUrl.pathname.startsWith(route)
	);

	if (user && !isProtectedPath) {
		return NextResponse.next();
	}

	if (user && isProtectedPath) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	}

	if (!user && isProtectedDashboard) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	}
}
