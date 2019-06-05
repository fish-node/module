let a = require('./a')
let b = require('./b')
let c = require('./c')

/**
 * 说明在module.exports后的代码也会被执行
 */
console.log(a) // { name: 'aaaaa' }

/**
 * exports是module.exports的引用
 * 真正require()的是module.exports
 * 修改exports的引用后，不会到处exports引用的对象
 */
console.log(b) // {}

/**
 * 在exports指向module.exports时,
 * 可以通过修改exports的值来修改要导出的对象
 */
console.log(c) // { name: 'cccc' }
