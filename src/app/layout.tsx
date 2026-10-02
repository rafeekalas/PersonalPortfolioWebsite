import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafeek Alas — Technical Product Lead | NLP & Generative AI",
  description:
    "Technical Product Lead specializing in NLP, Conversation AI, and Generative AI. Bangalore, India.",
  openGraph: {
    title: "Rafeek Alas — Technical Product Lead",
    description:
      "10+ years designing and shipping customer-centric AI products.",
    type: "website",
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
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <div className="grain" aria-hidden />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
