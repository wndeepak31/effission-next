import './globals.css'

export const metadata = {
  title: 'RBL - Together for transformation',
  description: 'Building modern and resilient digital experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&family=Inter:wght@400;500;600&family=Lexend+Giga:wght@300;400;500;600&family=Manrope:wght@400;500;600&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
