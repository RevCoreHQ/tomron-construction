export const siteConfig = {
  name: 'Timberline Falls',
  tagline: 'Premium Pool, Landscape & Concrete Construction',
  description:
    "Utah's trusted pool builder and outdoor living contractor. Custom swimming pools, landscape construction, and concrete services in Saratoga Springs, Bountiful, and surrounding areas. 20+ years experience. Free estimates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://timberlinefallsut.com',
  ogImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a32fc7167da411c97399d7.png',
  phone: '(801) 502-0306',
  phoneRaw: '+18015020306',
  email: 'info@timberlinefallsut.com',
  address: {
    street: '',
    city: 'Saratoga Springs',
    state: 'UT',
    zip: '84045',
    full: 'Saratoga Springs, UT 84045',
  },
  hours: {
    weekday: '7:00 AM – 5:00 PM',
    saturday: '7:00 AM – 5:00 PM',
    sunday: 'Closed',
    schema: ['Mo-Sa 07:00-17:00'],
  },
  social: {
    google: 'https://www.google.com/maps/place/Timberline+Falls/@40.3442899,-111.91013,12z',
    facebook: '',
    instagram: '',
  },
  trustPoints: [
    { label: '20+ Years Experience', icon: 'Shield' as const },
    { label: 'Licensed, Bonded & Insured', icon: 'BadgeCheck' as const },
    { label: '3D Design Approval', icon: 'Monitor' as const },
    { label: 'Free Estimates', icon: 'FileText' as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
