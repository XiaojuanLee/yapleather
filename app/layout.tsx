import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home/Footer";

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "Yap Leather",
  description: "Learn, Craft, and Master Leatherwork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
