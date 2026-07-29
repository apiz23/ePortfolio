import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Fira_Code } from "next/font/google";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/scroll-top";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hafizuddin-portfolio.vercel.app"),
  title: "Hafizu | Portfolio",
  description: "Personal Portfolio by Hafizu - Software Developer",
  icons: {
    icon: [{ url: "/favicon.ico", href: "/favicon.ico" }],
  },
  openGraph: {
    title: "Hafizu | Portfolio",
    description: "Personal Portfolio by Hafizu - Software Developer",
    type: "website",
    url: "https://hafizuddin-portfolio.vercel.app",
    siteName: "Hafizu Portfolio",
    locale: "en_US",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${outfit.variable} ${firaCode.variable} font-sans font-semibold bg-background antialiased`}
      >
        <Providers>
          <Navbar />
          <div className="relative min-h-screen">
            {children}
            <Toaster position="top-center" />
          </div>
          <ScrollToTop />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}