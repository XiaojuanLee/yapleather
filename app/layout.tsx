import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
<<<<<<< HEAD
import { Analytics } from '@vercel/analytics/next';

=======
import Footer from "@/components/home/Footer";
>>>>>>> image_input

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "YAPLEATHER",
  description: "Learn, Craft, and Master Leatherwork",
  icons: {
    icon: '/favicon.ico', // Update this path if your favicon is named differently or located in a subdirectory
  },
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
<<<<<<< HEAD
        <Analytics />
=======
        <Footer></Footer>
>>>>>>> image_input
      </body>
    </html>
  );
}
