const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'hidden-source-map'
});

// Use the SentryWebpack plugin to upload the source maps during build step
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const {
  NEXT_PUBLIC_SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    NODE_ENV,
    VERCEL_GITHUB_COMMIT_SHA,
    DEPLOYMENT_ENV
} = process.env

module.exports = withPlugins([[withImages],[withSourceMaps]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.node = {
      fs: "empty",
      tls: "empty",
      net: "empty"
    };
    const { dir } = options

    config.module.rules.push(
        {
        test: /\.(graphql|gql)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader'
          }
        ]
      })

    // In `pages/_app.js`, Sentry is imported from @sentry/node. While
    // @sentry/browser will run in a Node.js environment, @sentry/node will use
    // Node.js-only APIs to catch even more unhandled exceptions.
    //
    // This works well when Next.js is SSRing your page on a server with
    // Node.js, but it is not what we want when your client-side bundle is being
    // executed by a browser.
    //
    // Luckily, Next.js will call this webpack function twice, once for the
    // server and once for the client. Read more:
    // https://nextjs.org/docs#customizing-webpack-config
    //
    // So ask Webpack to replace @sentry/node imports with @sentry/browser when
    // building the browser's bundle
    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    // When all the Sentry configuration env variables are available/configured
    // The Sentry webpack plugin gets pushed to the webpack plugins to build
    // and upload the source maps to sentry.
    // This is an alternative to manually uploading the source maps
    // Note: This is disabled in development mode.
    if (
        NEXT_PUBLIC_SENTRY_DSN &&
        SENTRY_ORG &&
        SENTRY_PROJECT &&
        SENTRY_AUTH_TOKEN &&
        DEPLOYMENT_ENV &&
        NODE_ENV === 'production'
    ) {
      config.plugins.push(
          new SentryWebpackPlugin({
              include: '.next',
              ignore: ['node_modules'],
              urlPrefix: '~/_next',
              release: VERCEL_GITHUB_COMMIT_SHA,
              deploy: {
                  env: DEPLOYMENT_ENV
              }
          })
      )
    }
    return config;
  }
});
