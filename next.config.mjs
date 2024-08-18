/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.api-sports.io',
        pathname: '/football/players/**',
      },
      {
        protocol: 'https',
        hostname: 'media.api-sports.io',
        pathname: '/football/teams/**', 
      },
    ],
  },
};

export default nextConfig;
