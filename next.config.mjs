/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/clients",
        permanent: true, // This means it's a permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
