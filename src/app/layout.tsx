import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConnectModal from "./components/ConnectModal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TAKEOFF | Open Source Nest's Flagship Annual Event",
  description:
    "TAKEOFF is Open Source Nest's flagship annual event; celebrating real community impact, spotlighting emerging contributors, and setting the direction for the year ahead in open source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <div className="h-20 md:h-24" />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <ConnectModal />
      </body>
    </html>
  );
}
