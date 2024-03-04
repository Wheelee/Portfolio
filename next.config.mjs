/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
          hostname: "nextui-docs-v2.vercel.app"
        },
      ],
    },
  };
  
  export default nextConfig;