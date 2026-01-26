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
};

export default nextConfig;
