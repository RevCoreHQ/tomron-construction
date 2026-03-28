/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
      },
    ],
  },
  async redirects() {
    return [
      // Old site slugs
      { source: '/exterior-siding-and-cladding', destination: '/services/exterior-siding-cladding', permanent: true },
      { source: '/siding', destination: '/services/exterior-siding-cladding', permanent: true },
      { source: '/windows', destination: '/services/window-replacement', permanent: true },
      { source: '/doors', destination: '/services/door-replacement', permanent: true },

      // Google Ads old URL patterns
      { source: '/services/exterior-siding-installation', destination: '/services/exterior-siding-cladding', permanent: true },
      { source: '/services/siding', destination: '/services/exterior-siding-cladding', permanent: true },
      { source: '/services/siding-installation', destination: '/services/exterior-siding-cladding', permanent: true },
      { source: '/services/windows', destination: '/services/window-replacement', permanent: true },
      { source: '/services/window-installation', destination: '/services/window-replacement', permanent: true },
      { source: '/services/doors', destination: '/services/door-replacement', permanent: true },
      { source: '/services/door-installation', destination: '/services/door-replacement', permanent: true },
      { source: '/services/renovation', destination: '/services/home-renovation', permanent: true },
      { source: '/services/renovations', destination: '/services/home-renovation', permanent: true },
      { source: '/services/home-renovations', destination: '/services/home-renovation', permanent: true },
      { source: '/services/flashing', destination: '/services/metal-flashing', permanent: true },
      { source: '/services/envelope', destination: '/services/building-envelope', permanent: true },
      { source: '/renovation', destination: '/services/home-renovation', permanent: true },
      { source: '/flashing', destination: '/services/metal-flashing', permanent: true },
    ];
  },
};

export default nextConfig;
