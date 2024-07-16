import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/redux/Provider";
import CheckCurrentUserProvider from "@/providers/CurrentUserContext";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/components/Navbar";
import CreateRoadmapLayout from "@/components/create-roadmap/layout/CreateRoadmapLayout";

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
	return (
		<html lang="en">
			<body className={outfit.className}>
				<ToastContainer position="bottom-right" />
				<ReduxProvider>
					<CheckCurrentUserProvider>
						<Navbar />
						<CreateRoadmapLayout>{children}</CreateRoadmapLayout>
					</CheckCurrentUserProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
