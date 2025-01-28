import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {},
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
