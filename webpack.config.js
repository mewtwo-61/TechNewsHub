const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',  
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
      },
      host: 'localhost',
      port: 8080,
      headers: { 'Access-Control-Allow-Origin': '*' },
      open: true,
      hot: true,
      liveReload: true,
  }
};