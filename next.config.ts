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
        protocol: "http",
        hostname: "localhost",
        port: "7001",
        pathname: "/public/**",
      },
      {
        protocol: "http",
        hostname: "185.201.8.232",
        port: "7001",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
