import './globals.css'
import IconLibrary from './components/IconLibrary'

export const metadata = {
  metadataBase: new URL('https://www.effission.com'),
  title: {
    default: 'Effission - Digital Brilliance for Jewelry',
    template: '%s | Effission'
  },
  description: 'Leading software provider in the jewelry domain, specializing in Web Development, AI-driven Automation, 3D Configuration, and Digital Catalogues.',
  openGraph: {
    title: 'Effission - Digital Brilliance for Jewelry',
    description: 'Leading software provider in the jewelry domain, specializing in Web Development, AI-driven Automation, 3D Configuration, and Digital Catalogues.',
    url: 'https://www.effission.com',
    siteName: 'Effission',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Effission Jewelry Software Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Effission - Digital Brilliance for Jewelry',
    description: 'Leading software provider in the jewelry domain, specializing in Web Development, AI-driven Automation, 3D Configuration, and Digital Catalogues.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Effission",
  "url": "https://www.effission.com",
  "logo": "https://www.effission.com/logo.png",
  "description": "Leading software provider in the jewelry domain, specializing in Web Development, AI-driven Automation, 3D Configuration, and Digital Catalogues.",
  "sameAs": [
    "https://www.linkedin.com/company/effission",
    "https://twitter.com/effission"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&family=Inter:wght@400;500;600&family=Lexend+Giga:wght@300;400;500;600&family=Manrope:wght@400;500;600&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <IconLibrary />
        {children}
      </body>
    </html>
  )
}
