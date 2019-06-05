# JS的模块化
因为历史原因，js有多种模块化机制

## commonjs 和 es2015 module的共同特性：
- 打包的原理是闭包

- 被import多次的模块也只会执行一次，这种情况下export对象要特别小心

- 不管export写到哪里，整个模块代码都会被完全执行，所以export写在开头还是结尾都没有关系。

  但是为什么不写在结尾呢？这样语义会很清晰直白，受不了那种把export写在开头的人，这种写法总会让能犹豫几秒钟
