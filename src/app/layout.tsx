import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Suh | Software Developer",
  description: "Software developer based in Vancvouer, BC.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-navy font-sans text-body antialiased">{children}</body>
    </html>
  );
}
