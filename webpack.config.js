var path = require('path'); // load from Node.js

module.exports = {
	// all settings

	// 撰寫中的高版本JS程式
  entry: ['./src/scripts_es6/main.js','./src/scripts_es6/db.js'], 
  
  // 輸出的檔案位置
 output: {
    path: path.join(__dirname, './src/scripts_es5'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
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