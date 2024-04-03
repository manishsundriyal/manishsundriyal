import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "${path.resolve(__dirname, 'src/styles/variables.scss')}";`,
  },
  images: {
    domains: ['ik.imagekit.io']
  }
  //  experimental: {
//   swcPlugins: [['@swc-jotai/react-refresh', {}]],
//  }
};

export default nextConfig;
