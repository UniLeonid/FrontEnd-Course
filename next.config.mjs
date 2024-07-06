/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/FrontEnd-Course",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.xkcd.com',
        port: '',
        pathname: '/**'
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;
