/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.optimization.splitChunks.cacheGroups = {
          default: false,
          vendors: false,
        };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
