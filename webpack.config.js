const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ mode }) => {
  return {
    mode,
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            context: 'node_modules/@webcomponents/webcomponentsjs',
            from: '**/*.js',
            to: 'webcomponents',
          },
        ],
      }),
    ],
    devtool: mode === 'development' ? 'source-map' : 'none',
    module: {
      rules: [
        {
          test: /\.css|\.s(c|a)ss$/,
          use: [
            {
              loader: 'lit-scss-loader',
              options: {
                minify: false, // defaults to false
              },
            },
            'extract-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  };
};
