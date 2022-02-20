/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
}

module.exports = module.exports = {
  env: {
    SERVICE_ID: 'service_ug8736k',
    TEMPLATE_ID: 'template_vmewrld',
    USER_ID: 'user_0BvAfKOJsDKkO8f88Dmpf',
  },
  future: {
    webpack5: true
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
  
}