import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "paid-eight.vercel.app" }],
        destination: "https://paid.koalasalmon.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
