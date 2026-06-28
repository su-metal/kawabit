/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
