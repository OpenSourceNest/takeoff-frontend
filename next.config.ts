import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
