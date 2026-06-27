import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

export const metadata: Metadata = {
  title: "ARCANIS | Academy of Professional Judgment",
  description:
    "Simulateur immersif de decision professionnelle pour consultants QSE."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
