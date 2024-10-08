import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "drew zhou",
  description: "",
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body className={`${inter.className} bg-gray-50 flex flex-col flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-screen`}>
    <div className="min-h-screen h-full flex flex-col">
      <Header />
        {children}
    </div>
    <Footer />
    <Analytics />
  </body>

</html>

  );
}