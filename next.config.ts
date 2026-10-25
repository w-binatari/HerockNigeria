import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/equipment-people-and-training",
        destination: "/human-capital-development",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
