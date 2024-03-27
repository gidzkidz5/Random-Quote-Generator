import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700", "800"],

});

export const metadata: Metadata = {
  title: "Random Advice Generator",
  description: "Made by Gideon - NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark justify-center flex items-center h-screen`}>{children}</body>
    </html>
  );
}
