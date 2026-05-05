import type { Metadata } from "next";
import { JetBrains_Mono, Work_Sans } from "next/font/google";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OperTask",
  description:
    "OperTask maps manual workflows, scores automation opportunities, and delivers prioritized implementation roadmaps for growing teams.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ground text-ink">{children}</body>
    </html>
  );
}
