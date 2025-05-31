import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {},  
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "attend.melianetworkid.com",
      },
      {
        protocol: "https",
        hostname: "absensi.bgroup.id"
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-Uroboros",
          },
        ],
      },
    ];
  },
  output: "standalone",  
  productionBrowserSourceMaps: false
};

export default nextConfig;

