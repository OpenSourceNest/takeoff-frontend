import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`, // Proxy to Backend
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
