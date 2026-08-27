import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/app-ads.txt",
        destination: "/ads.txt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
