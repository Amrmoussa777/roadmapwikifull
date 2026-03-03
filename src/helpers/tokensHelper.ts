import { fetchAnonymousToken } from "@/services/fetchAnonymousToken";
import { getCookies } from "@/services/getCookies";
import { setCookies } from "@/services/setCookies";

interface Tokens {
	accessToken: string;
	refreshToken: string;
	accessTokenExpiresAt: number;
	refreshTokenExpiresAt: number;
}

class TokensHelper {
	private static tokens: Partial<Tokens> = {};
	private static tokenPromise: Promise<void> | null = null;

	public static fetchTokens = async () => {
		if (!TokensHelper.tokenPromise) {
			TokensHelper.tokenPromise = (async () => {
				try {
					const tokens = await getCookies();

					if (!tokens.accessToken) {
						const newAccessToken: string = await fetchAnonymousToken();
						await setCookies({ accessToken: newAccessToken });
						TokensHelper.tokens.accessToken = newAccessToken;
					} else {
						TokensHelper.tokens = tokens;
					}
				} catch (error) {
					console.error("Error fetching tokens:", error);
					// Handle error appropriately
				} finally {
					TokensHelper.tokenPromise = null;
				}
			})();
		}

		await TokensHelper.tokenPromise;
	};

	public static getTokens() {
		return TokensHelper.tokens;
	}
}

export default TokensHelper;
