// ES6 --> webpack --> ES5
// 轉譯後才能執行

import hello from './hello.module.js'
import str from './string.module.js'
hello()
console.log("load from: " + str)

const cs6array = [1,2,3,4]
let aa = cs6array.map( item => {
	return item * 2;
})

console.log(aa);

let bb = cs6array.filter( item => {
	return item >= 3;
})

console.log(bb);