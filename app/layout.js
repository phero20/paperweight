import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

export const metadata = {
  title: 'The Paperweight',
}

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink antialiased">
        {children}</body>
    </html>
  )
}