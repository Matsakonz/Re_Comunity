// Login
import { auth, signIn, signOut } from "@/app/auth"
import { redirect } from 'next/navigation'
// configwebsite
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../globals.css";
// Component
import Navbar from "@/app/pages/components/Navbar";
import Footer from "@/app/pages/components/Footer"
import ThemeProvider from "../../theme_changer/Themeprovider"

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RECOMMUNITY",
  description: "Web for Re Student",
  icons:{
    icon:['/favicon.ico']
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  const email = user?.email || "";
  const re_id = email.slice(3, 10);

  if( user ) {
    if (re_id == "0102361") {
        return  (
          <html lang="en" className={roboto_mono.className}>
            <body className="bg-base-100 duration-450">
              <ThemeProvider>
                  <Navbar user={user} />
                  {children}
                  <Footer />
              </ThemeProvider>
            </body>
          </html>
        ) 
    }
    return redirect('/')
  } 
  return redirect('/')
}
