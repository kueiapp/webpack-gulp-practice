var path = require('path'); // load from Node.js

module.exports = {
	// all settings

	// 撰寫中的高版本JS程式
  entry: './src/main.js', 
  
  // 輸出的檔案位置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.compiled.js',
  },

  // loader的模組，例如 Babel
  module: {
	  rules: [
	    {
	      test: /\.m?js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    }
	  ]
	}

};