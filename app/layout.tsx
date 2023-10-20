import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <body className={font.className + " overflow-x-hidden"}>
        <main className="px-12 md:px-24 pt-12 md:pt-24 min-h-screen flex flex-col flex-nowrap justify-between">
          <div>
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
