import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  env:{
    NEXT_PUBLIC_BASE_API:process.env.NEXT_PUBLIC_BASE_API
  },
  images:{
    remotePatterns:[
      {
        hostname:'fakestoreapi.com',
        protocol:'https'
      },
      {
        hostname:'storage.googleapis.com',
        protocol:'https'
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
