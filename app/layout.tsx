import AppContextProvider from "@/contexts/AppContext";
import { Providers } from "@/contexts/Provider";
import { Roboto } from 'next/font/google'
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: "Abdelmajid Alahyane | Fullstack Developer",
  description: "Abdelmajid Alahyane Personal Portfolio",
};

const roboto = Roboto({
  weight: ['300','400','500','700','900'],
  display: 'swap',
  subsets:['latin',]
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
      className={`${roboto.className} dark:bg-blue-950`}
      >
      <Analytics/>
      <AppContextProvider>
      <Providers>
      <Toaster
          position="top-center"
          reverseOrder={false}
      />
        {children}
      </Providers>
      </AppContextProvider>
      </body>
    </html>
  );
}