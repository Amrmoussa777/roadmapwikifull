import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export function GET(request: NextRequest) {
	try {
		const cookies = cookie.parse(request.headers.get("cookie") || "");

		const response = {
			accessToken: cookies.accessToken || null,
			refreshToken: cookies.refreshToken || null,
			accessTokenExpiresAt: cookies.accessTokenExpiresAt || null,
			refreshTokenExpiresAt: cookies.refreshTokenExpiresAt || null,
		};

		return NextResponse.json(response);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error retrieving cookies" },
			{ status: 500 }
		);
	}
}
