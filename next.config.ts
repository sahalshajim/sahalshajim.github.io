import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Dev-only: let `next dev` serve its JS to browsers on the LAN IP.
  allowedDevOrigins: ["10.127.30.214"],
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
