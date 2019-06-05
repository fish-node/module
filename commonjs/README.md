# commonjs
主要用在nodejs中。

原理是闭包，每个模块都被包装在这个函数中
``` js
(function (exports, require, module, __filename, __dirname) {

})()
```

- require其他模块，就是寻找对应模块的module.exports这个对象
- exports是前者的引用，修改exports的属性就是修改module.exports,但是修改exports的引用，那它就不能代表molude.exports,但是其他文件的require只看module.exports

说了这么多，我只想说：设计exports的人是大**。 为了所谓的简写，为什么把这么简单的事件搞得复杂？能不能统一一下？浪费了多少脑细胞？？
