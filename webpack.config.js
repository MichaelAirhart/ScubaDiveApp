const path = require('path')

module.exports = {
  entry: './scripts/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, 
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
