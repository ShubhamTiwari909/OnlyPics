"use client";
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { useLocalStorage } from '@mantine/hooks';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const [colorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'dark',
  });
  

  return (
    <html lang="en" data-theme={colorScheme}>
      <body className={inter.className}>
        <Navbar />
        <main className='mt-20'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
