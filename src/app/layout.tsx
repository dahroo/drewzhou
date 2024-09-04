import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "drew zhou",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="h-screen">
          <Header/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
