import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Spotlight from "@/components/Spotlight";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "David Suh | Software Developer";
const description =
  "Software developer based in Vancouver, BC. Former math teacher building web and mobile apps that make complicated things feel simple.";

export const metadata: Metadata = {
  metadataBase: new URL("https://david-suh.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "David Suh",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-navy font-sans text-body antialiased">
        <Spotlight />
        {children}
        <Analytics />
      </body>
    </html>
  );
}