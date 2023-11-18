import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { montserrat } from '@/lib/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Loja que consome API REST',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
  )
}
