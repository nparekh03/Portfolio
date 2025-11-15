import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTracker from "@/components/PageTracker";
import AchievementSystem from "@/components/AchievementSystem";
import SkipLink from "@/components/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Nirali Parekh | Product Manager - AI, Fintech, SaaS",
  description:
    "Product Manager specializing in AI-powered products, fintech platforms, and SaaS solutions. Architecting products that transform user insights into scalable solutions.",
  keywords: [
    "Product Manager",
    "AI Product",
    "Fintech",
    "SaaS",
    "PM Portfolio",
    "Product Management",
  ],
  authors: [{ name: "Nirali Parekh" }],
  openGraph: {
    title: "Nirali Parekh - Product Manager Portfolio",
    description: "Building products that solve real problems with empathy and data.",
    url: "https://niraliparekh.github.io",
    siteName: "Nirali Parekh Portfolio",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirali Parekh | Product Manager",
    description: "AI · Fintech · SaaS Product Leadership",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nirali Parekh",
              jobTitle: "Product Manager",
              url: "https://niraliparekh.github.io",
              sameAs: [
                "https://www.linkedin.com/in/niraliparekh0303",
                "https://github.com/niraliparekh",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SkipLink />
          <PageTracker />
          {children}
          <AchievementSystem />
        </ThemeProvider>
      </body>
    </html>
  );
}

