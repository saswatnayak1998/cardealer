import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallUsBar from "@/components/CallUsBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Deals | Daly City, CA",
  description:
    "Minimal, elegant car dealership website. Explore curated inventory, easy financing, and friendly service in Daly City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>        
        <div className="min-h-dvh flex flex-col">
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <CallUsBar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
