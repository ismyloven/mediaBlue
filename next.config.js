/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          issuer: /\.jsx?$/,
          resourceQuery: {
            not: /url/,
          },
          use: ['@svgr/webpack'],
        },
        {
          issuer: /\.jsx?$/,
          resourceQuery: /url/, // *.svg?url
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 200,
            },
          },
        },
        {
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 200,
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
