import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      {/* <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/favicon.png"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="32x32"
          href="/public/favicon.png"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="16x16"
          href="/public/favicon.png"
        />
      </head> */}

      <body className={inter.className}>{children}</body>
    </html>
  );
}
