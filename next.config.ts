import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Avoids image optimization (required for static export)
  },
};

export default nextConfig;
