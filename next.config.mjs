/** @type {import('next').NextConfig} */
const nextConfig = {
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
        pathname: "/api/images/**",
      },
      {
        protocol: "https",
        hostname: "attend.melianetworkid.com",
        pathname: "/api/images/**",
      },
    ],
  },
};

export default nextConfig;
