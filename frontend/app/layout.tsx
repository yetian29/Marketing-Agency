import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

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
        <body className={font.className}>
            <Navbar/>
                <div className="pt-24 pb-32">

                {children}

                </div>
            <Footer/>
      </body>
    </html>
  )
}
