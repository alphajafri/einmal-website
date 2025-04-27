import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/einmal-website", // your GitHub repo name
  assetPrefix: "/einmal-website", // important for images, videos
};

module.exports = nextConfig;

export default nextConfig;