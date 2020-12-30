
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env = {}) => {

  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ]
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'Chat',
        buildTime: new Date().toISOString(),
        template: 'public/index.html'
      })
    ];
    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }))
    }

    return plugins
  }

  return {
    mode: isProd ? 'production' : isDev && 'development',

    output:{
      filename: isProd ? 'main-[hash:8].js' : undefined
    },

    module: {
      rules: [
        {
          test: /\.js$/, //все файлы с расшерением js
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'//теперь все фалйы с расшерением js будут проходить через babel-loader
            }
          ]
        },
        // Loading images
        {
          test: /\.(png|jpg|gif|ico|jpeg)$/, //для какого типа файлов
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images', 
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },
        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/, 
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',   
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },
        // Loading css
        {
          test: /\.css$/,
          use: getStyleLoaders()
        },
        {
          test: /\.(s[ca]ss)$/, //для какого типа файлов
          use: [...getStyleLoaders(), 'sass-loader']
        }
      ]
    },

    //тут конфигурируем плагины
    plugins: getPlugins(),

    //для конфигурации webpack-dev-server
    devServer: {
      open: true, 
    }
  }
}