/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bipartisan-policy-center.imgix.net",
      },
    ],
  },
};

export default nextConfig;
