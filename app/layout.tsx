import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nivetha V | SQL Developer & Data Analyst',
  description: 'Portfolio of Nivetha V - SQL Developer, Data Analyst & Frontend Developer based in Chennai, India. Crafting data-driven solutions with SQL Server, Power BI & Python.',
  keywords: ['SQL Developer', 'Data Analyst', 'Frontend Developer', 'Chennai', 'Power BI', 'Python', 'SQL Server'],
  authors: [{ name: 'Nivetha V' }],
  openGraph: {
    title: 'Nivetha V | SQL Developer & Data Analyst',
    description: 'Crafting data-driven solutions with SQL Server, Power BI & Python',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased noise-bg bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
