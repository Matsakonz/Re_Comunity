import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReComunity",
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
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
