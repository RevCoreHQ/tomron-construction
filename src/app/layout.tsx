import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { siteConfig } from '@/data/site-config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import '@/styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Siding, Windows & Exterior Contractor, Lower Mainland BC`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'siding installation Lower Mainland',
    'siding contractor Maple Ridge',
    'window replacement Coquitlam',
    'door replacement Burnaby',
    'building envelope BC',
    'exterior renovation Lower Mainland',
    'home renovation Maple Ridge',
    'siding contractor BC',
    'fiber cement siding Vancouver',
    'Tomron Construction',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name}, Siding, Windows & Exterior Contractor in the Lower Mainland` }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
