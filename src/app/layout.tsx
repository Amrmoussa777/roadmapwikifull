import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
