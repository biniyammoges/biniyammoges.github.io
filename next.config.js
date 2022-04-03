/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "dummyimage.com"],
  },
};

module.exports = nextConfig;
