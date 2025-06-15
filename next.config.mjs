/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.lamaras-lineart.at',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
        loader: 'custom',
        loaderFile: './loader.js',
        unoptimized: true
      },
    reactStrictMode: true,
    // output: 'export',
};

export default nextConfig;
