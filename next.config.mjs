/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: '/exterior-siding-and-cladding', destination: '/services/exterior-siding-cladding', permanent: true },
      { source: '/siding', destination: '/services/exterior-siding-cladding', permanent: true },
      { source: '/windows', destination: '/services/window-replacement', permanent: true },
      { source: '/doors', destination: '/services/door-replacement', permanent: true },
    ];
  },
};

export default nextConfig;
