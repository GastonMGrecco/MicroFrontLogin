const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js'

    },
    devServer: {
<<<<<<< HEAD
      port: 8082,
=======
      port: 8081,
>>>>>>> e0a52f32a81f7770bfe1d485477cf53f73b3ef5c
      liveReload: true,
      open: true,
      hot: false,
      watchFiles: ['public/**/*']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new ModuleFederationPlugin({
        name: 'nav',
        filename: 'remoteEntry.js',
        remotes: {
        },
        exposes: {
          './nav': './src/App.js'
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          }
        }
      })
    ]
  };
};
