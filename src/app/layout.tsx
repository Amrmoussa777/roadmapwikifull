import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import ReduxProvider from "@/redux/Provider";
import CheckCurrentUserProvider from "@/providers/CheckCurrentUser";
import { getUser } from "@/app/auth/services/getUser";
import PrivateNavbar from "@/components/navbar/components/PrivateNavbar";
import PublicNavbar from "@/components/landing-page/components/public-navbar/PublicNavbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Roadmap",
	description: "Ultimate roadmap to achieve your goals",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon.png",
				href: "/favicon.png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon.png",
				href: "/favicon.png",
			},
		],
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const accessToken = cookies().get("accessToken");
	const currentUser = await getUser(accessToken?.value);

	return (
		<html lang="en">
			<body className={outfit.className}>
				<ReduxProvider>
					<CheckCurrentUserProvider>
						{currentUser ? <PrivateNavbar /> : <PublicNavbar />}
						{children}
					</CheckCurrentUserProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
