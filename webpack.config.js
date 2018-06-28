const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
      main: './src/main.js',
      Redirector: './src/Redirector.js',
      actions: './src/actions.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    externals: {
      react: 'umd react',
      'prop-types' : 'umd prop-types',
      'react-router-dom' : 'umd react-router-dom'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    stats: {
        colors: true
    }
};
