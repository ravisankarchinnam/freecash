/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/earn",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
