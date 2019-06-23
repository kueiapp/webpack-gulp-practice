// ES6 --> webpack --> ES5
// 轉譯後才能執行

import hello from './hello.module.js'
import str from './string.module.js'
hello()
console.log("load from db.js: " + str)
