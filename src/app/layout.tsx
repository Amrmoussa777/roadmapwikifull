import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/redux/Provider";
import CheckCurrentUserProvider from "@/providers/CurrentUserContext";
import Navbar from "@/components/navbar/components/Navbar";
import { inter, outfit, poppins } from "@/app/fonts";
import CreateRoadmapLayout from "@/components/builder/layout/CreateRoadmapLayout";
import TokensProvider from "@/providers/TokensProvider";

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
	return (
		<html lang="en">
			<body
				className={`${outfit.className} ${inter.variable} ${poppins.variable}`}
			>
				<TokensProvider>
					<Toaster />
					<ReduxProvider>
						<CheckCurrentUserProvider>
							<Navbar />
							<CreateRoadmapLayout>{children}</CreateRoadmapLayout>
						</CheckCurrentUserProvider>
					</ReduxProvider>
				</TokensProvider>
			</body>
		</html>
	);
}
