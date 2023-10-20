import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michal Špitálský | Filmmaker, designer and artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="p-12 md:p-24">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
