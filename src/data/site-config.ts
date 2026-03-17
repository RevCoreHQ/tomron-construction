export const siteConfig = {
  name: 'Tomron Construction',
  tagline: 'Built on Family Values',
  description:
    "Lower Mainland's trusted siding, exterior renovation, and construction company. Expert siding installation, window & door replacement, building envelope solutions, and home renovations in Maple Ridge, Coquitlam, Burnaby & surrounding BC communities. 10+ years experience. Free quotes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tomron.ca',
  ogImage: '/og-image.png',
  phone: '(604) 754-9392',
  phoneRaw: '+16047549392',
  email: 'brendan@tomron.ca',
  address: {
    street: '20368 Ditton St',
    city: 'Maple Ridge',
    state: 'BC',
    zip: 'V2X 1C1',
    full: '20368 Ditton St, Maple Ridge, BC V2X 1C1',
  },
  hours: {
    weekday: '7:00 AM – 5:00 PM',
    saturday: '7:00 AM – 5:00 PM',
    sunday: 'Closed',
    schema: ['Mo-Sa 07:00-17:00'],
  },
  social: {
    google: 'https://maps.app.goo.gl/XDWvBqMVHix6ZySi9',
    instagram: 'https://instagram.com/tomronconstruction',
  },
  trustPoints: [
    { label: '10+ Years Experience', icon: 'Shield' as const },
    { label: 'Locally Owned & Insured', icon: 'BadgeCheck' as const },
    { label: 'Industry-Leading Warranty', icon: 'Award' as const },
    { label: 'Free Quotes', icon: 'FileText' as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
