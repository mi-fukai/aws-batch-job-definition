const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path')

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ["baito.mynavi.jp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compilerOptions: {

  },
  experimental: {
    scrollRestoration: true,
    // cpus: 2,
    // workerThreads: true
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.module.rules.push({
  //     test: /\.(js|jsx)$/,
  //     use: [{
  //       loader: 'esbuild-loader',
  //       options: {
  //         loader: 'jsx',
  //         target: 'es2015'
  //       }
  //     }],
  //   });
  //   return config;
  // },
});
