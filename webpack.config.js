const path = require('path');

module.exports = {
    entry:'./src/index.js',
    mode:"development",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist') 
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }

        ]
      }
}