module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
