import ConnectModal from "@/components/layout/ConnectModal";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import OG from "./open-graph.png";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TAKEOFF By OpenSourceNest",
  description:
    "Discover open source for everyone at Takeoff by Open Source Nest on Feb 28th, 2026 in Nsukka. Hands-on sessions, panels, networking for beginners & enthusiasts. Join the nest! 🚀",
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
        <Navbar />
        <div className="h-20 md:h-24" />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <ConnectModal />
        <Suspense fallback={null}>
          {/* <AnalyticsTracker /> TEMPORARY SUSPENSION */}
        </Suspense>
      </body>
    </html>
  );
}
