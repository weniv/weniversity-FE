/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "https://www.weniversity.co.kr" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
