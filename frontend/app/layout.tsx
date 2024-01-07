import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/navbar/Navbar'
import Footer from '@/components/common/footer/Footer'
import StoreProvider from "@/redux/StoreProvider" 

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Murkiva | Sofware Agency',

  description: 'Murkiva Studio',
}






export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    
    <html lang="en">
        <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500" rel="stylesheet"/>
        </head>

        <body className={font.className}>
            <StoreProvider>

                    <Navbar/>
                    <div className="pt-24 pb-32">

                        {children}

                    </div>
                    <Footer/>
                </StoreProvider>
      </body>
    </html>
  )
}
