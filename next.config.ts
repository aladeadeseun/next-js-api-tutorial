import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents:true,
  /* config options here */
  experimental: {
    authInterrupts: true,
  },
  images:{
    remotePatterns:[
      {"protocol":"https", hostname:"res.cloudinary.com"}
    ]
  }
};

export default nextConfig;
