import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export async function POST(request: NextRequest) {
	try {
		const {
			accessToken,
			refreshToken,
			accessTokenExpiresAt,
			refreshTokenExpiresAt,
		} = await request.json();

		const cookies = [
			cookie.serialize("accessToken", accessToken || "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: accessToken ? 60 * 60 * 24 * 7 : 0,
				path: "/",
			}),
			cookie.serialize("refreshToken", refreshToken || "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: refreshToken ? 60 * 60 * 24 * 30 : 0,
				path: "/",
			}),
			cookie.serialize("accessTokenExpiresAt", accessTokenExpiresAt || "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: accessTokenExpiresAt ? 60 * 60 * 24 * 7 : 0,
				path: "/",
			}),
			cookie.serialize("refreshTokenExpiresAt", refreshTokenExpiresAt || "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: refreshTokenExpiresAt ? 60 * 60 * 24 * 30 : 0,
				path: "/",
			}),
		];

		const response = NextResponse.json({ message: "Cookies have been set" });
		response.headers.append("Set-Cookie", cookies.join(", "));
		return response;
	} catch (error) {
		return NextResponse.json(
			{ message: "Error setting cookies" },
			{ status: 500 }
		);
	}
}
