import { NextConfig } from 'next';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': join(__dirname, 'src'),
      'widgets': join(__dirname, 'src/widgets'),
      'entities': join(__dirname, 'src/entities'),
      'features': join(__dirname, 'src/features'),
      'shared': join(__dirname, 'src/shared'),
      'app': join(__dirname, 'src/app'),
    };
    return config;
  },
};

export default nextConfig;
