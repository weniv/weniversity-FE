/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "https://www.weniversity.co.kr" : undefined,
  experimental: {
    incremtnalCaching: true,
  },
};

module.exports = nextConfig;
