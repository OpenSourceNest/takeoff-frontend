import ConnectModal from "@/components/layout/ConnectModal";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import OG from "./open-graph.png";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TAKEOFF By OpenSourceNest",
  description:
    "Discover open source for everyone at Takeoff by Open Source Nest on March 21st, 2026 in Nsukka, Enugu State. Hands-on sessions, panels, networking for beginners & enthusiasts. Join the nest! 🚀",
  metadataBase: new URL("https://takeoff.opensourcenest.org/"),
  keywords: [
    "open source",
    "takeoff",
    "opensourcenest",
    "nsukka",
    "tech event",
    "enugu",
    "github",
    "developer",
    "software",
    "community",
    "networking",
    "learning",
    "technology",
    "conference",
    "workshops",
    "panels",
    "hackathon",
    "collaboration",
    "foss",
    "free",
    "takeoff2026",
  ],
  openGraph: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
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
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      data-scroll-behavior="smooth"
    >
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
          strategy="beforeInteractive"
        />

        <Navbar />
        <main className="flex-1 w-full overflow-hidden">{children}</main>
        <Footer />
        <ConnectModal />
        <Suspense fallback={null}>
          {/* <AnalyticsTracker /> TEMPORARY SUSPENSION */}
        </Suspense>
      </body>
    </html>
  );
}
