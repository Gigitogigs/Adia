import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Adia",
  images: {
    qualities: [60, 75],
    unoptimized: true,
  },
};

export default nextConfig;
