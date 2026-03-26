import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEVA.PROJECTS — Premium Systems Engineering",
  description:
    "High-performance web architecture and specialized AI integration for industry leaders who demand excellence. Web Development, AI, Machine Learning, and Cybersecurity.",
  keywords: ["web development", "AI integration", "machine learning", "cybersecurity", "Next.js", "tech agency"],
  authors: [{ name: "NEVA.PROJECTS" }],
  openGraph: {
    title: "NEVA.PROJECTS — Premium Systems Engineering",
    description:
      "High-performance web architecture and specialized AI integration for industry leaders who demand excellence.",
    siteName: "NEVA.PROJECTS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEVA.PROJECTS — Premium Systems Engineering",
    description:
      "High-performance web architecture and specialized AI integration for industry leaders who demand excellence.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
