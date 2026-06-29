import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCANIS | Academy of Professional Judgment",
  description:
    "Experience immersive de mission professionnelle pour consultants QSE."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
