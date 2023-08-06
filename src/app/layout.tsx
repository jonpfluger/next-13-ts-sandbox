import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next13 sandbox',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className={styles.header}>From layout</div>
        <div>{children}</div>
      </body>
    </html>
  )
}
