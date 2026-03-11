import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { siteConfig } from '@/data/site-config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import '@/styles/globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Pool, Landscape & Concrete Construction in Utah`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'pool construction Utah',
    'swimming pool builders Utah',
    'custom pool builder Saratoga Springs',
    'pool installation Utah County',
    'landscape construction Utah',
    'concrete services Utah',
    'outdoor living contractor Utah',
    'pool builders Bountiful UT',
    'inground pool Utah',
    'Timberline Falls',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} — Pool, Landscape & Concrete Construction in Utah` }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <link rel="dns-prefetch" href="https://lirp.cdn-website.com" />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
