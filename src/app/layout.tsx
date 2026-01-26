import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import OG from "./opengraph-image.png";
import Main from "@/components/Main";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TAKEOFF By OpenSourceNest",
  description: "Keep an eye for the launch",
  metadataBase: new URL("https://takeoff.opensourcenest.org/"),
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Main />
      </body>
    </html>
  );
}
