import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  env: {},
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
