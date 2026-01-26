import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_URL || 'http://localhost:4500'}/api/:path*`, // Proxy to Backend
      },
    ];
  },
  images: {
    qualities: [100, 75],
  },
  compress: true,
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
