import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import ThemeProvider from "../providers/Themeprovider"

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RECOMUNITY",
  description: "Web for Re Student",
  icons:{
    icon:['/favicon.ico']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body className="bg-base-100 duration-450">
        <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}