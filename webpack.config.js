const path = require('path')
const webpack = require('webpack')
// const PrettierPlugin = require('prettier-webpack-plugin')
const getPackageJson = require('./scripts/getPackageJson')

const {
  version,
  name,
  license,
  // repository,
  author
} = getPackageJson('version', 'name', 'license', 'repository', 'author')

const banner = `
  ${name} v${version}
  Copyright (c) ${author.replace(/ *<[^)]*> */g, ' ')}
  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Splitter',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
}
