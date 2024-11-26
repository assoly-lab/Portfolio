import AppContextProvider from "@/contexts/AppContext";
import { Providers } from "@/contexts/Provider";
import { Roboto } from 'next/font/google'
import { Toaster } from "react-hot-toast";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


type MetadataType = {
  [lang:string]:{
    title:string,
    description:string
  }
}

const metadata : MetadataType = {
  'en':{
    title: "Abdelmajid Alahyane | Fullstack Developer",
    description: "Abdelmajid Alahyane Personal Portfolio"
  },
  'fr':{
    title: "Abdelmajid Alahyane | Développeur Fullstack",
    description: "Abdelmajid Alahyane Portfolio Personnel"
  }
}

export async function generateMetadata({params:{locale}}:{params:{locale:string}}){
  return metadata[locale]
}

const roboto = Roboto({
  weight: ['300','400','500','700','900'],
  display: 'swap',
  subsets:['latin',]
})



export default async function RootLayout({
  children,
  params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params:{locale:string}
}>) {

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
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
      <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </Providers>
      </AppContextProvider>
      </body>
    </html>
  );
}