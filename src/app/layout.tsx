import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/redux/Provider";
import CurrentUserProvider from "@/providers/CurrentUserContext";
import Navbar from "@/components/navbar/components/Navbar";
import { inter, outfit, poppins } from "@/app/fonts";
import CreateRoadmapLayout from "@/components/builder/layout/CreateRoadmapLayout";
import ConversationLayout from "@/components/conversation/components/ConversationLayout";
import SocketProvider from "@/providers/SocketProvider";
import { getUser } from "@/app/auth/services/getUser";

export const metadata: Metadata = {
	title: "Roadmap",
	description:
		"Publish and follow structured learning paths. Each roadmap is an ordered set of steps, with resources, discussion, and a price set by the creator.",
	metadataBase: new URL("https://roadmapwiki.com"),
	openGraph: {
		title: "Roadmap",
		description:
			"Publish and follow structured learning paths. Each roadmap is an ordered set of steps, with resources, discussion, and a price set by the creator.",
		url: "https://roadmapwiki.com",
		siteName: "Roadmap",
		type: "website",
	},
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
	const currentUser = await getUser();

	return (
		<html lang="en">
			<body
				className={`${outfit.className} ${inter.variable} ${poppins.variable}`}
			>
				<Toaster />
				<ReduxProvider>
					<CurrentUserProvider initialUser={currentUser}>
						<SocketProvider>
							<CreateRoadmapLayout>
								<Navbar />
								<ConversationLayout>{children}</ConversationLayout>
							</CreateRoadmapLayout>
						</SocketProvider>
					</CurrentUserProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
