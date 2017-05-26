const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: ["./src/app/main.ts"]
  },
  output: {
    path: resolve('dist'),
    publicPath: "/",
    filename: "app.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.html', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      "@": resolve('src')
    }
  },
  module: {
    rules: [
      {
        enforce: 'post',
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: resolve('src/app/resource.scss')
            },
          },
        ]
      },
      {
        test: /\.html$/,
        loader: 'vue-template-loader',
        exclude: resolve('src/index.html'),
        options: {
          scoped: true
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFileName: resolve('tsconfig.json'),
              appendTsSuffixTo: [/\.vue$/]
            }
          },
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src')],
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
          esModule: true,
        }
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin()
  ],
  devtool: 'cheap-eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}