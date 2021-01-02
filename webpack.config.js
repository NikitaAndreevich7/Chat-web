const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => {
  const { mode = 'development' } = env

  const isProd = mode === 'production'
  const isDev = mode === 'development'

  const getStyleLoaders = () => {
    return [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'Chat',
        buildTime: new Date().toISOString(),
        template: 'public/index.html',
      }),
    ]
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'main-[hash:8].css',
        }),
      )
    }

    return plugins
  }

  return {
    mode: isProd ? 'production' : isDev && 'development',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined,
    },

    module: {
      rules: [
        {
          test: /\.(ts|js)x?/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        // Loading images
        {
          test: /\.(png|jpg|gif|ico|jpeg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },
        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [...getStyleLoaders(), 'sass-loader', 'postcss-loader'],
        },
      ],
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
      compress: true,
      watchContentBase: true,
      contentBase: './src/index.tsx',
    },
  }
}
