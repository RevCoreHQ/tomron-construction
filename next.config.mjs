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
        hostname: 'lirp.cdn-website.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/swimming-pool-construction', destination: '/services/swimming-pool-construction', permanent: true },
      { source: '/landscape-construction', destination: '/services/landscape-construction', permanent: true },
      { source: '/concrete-services', destination: '/services/concrete-services', permanent: true },
    ];
  },
};

export default nextConfig;
