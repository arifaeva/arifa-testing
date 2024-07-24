import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "7001",
        pathname: "/public/**",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
