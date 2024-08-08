import cookie from "cookie";
import { NextResponse } from "next/server";

export async function POST() {
	try {
		const cookies = [
			cookie.serialize("accessToken", "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 0,
				path: "/",
			}),
			cookie.serialize("refreshToken", "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 0,
				path: "/",
			}),
			cookie.serialize("accessTokenExpiresAt", "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 0,
				path: "/",
			}),
			cookie.serialize("refreshTokenExpiresAt", "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 0,
				path: "/",
			}),
		];

		const response = NextResponse.json({ message: "Cookies have been clear" });
		response.headers.append("Set-Cookie", cookies.join(", "));
		return response;
	} catch (error) {
		return NextResponse.json(
			{ message: "Error clearing cookies" },
			{ status: 500 }
		);
	}
}
