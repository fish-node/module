# ES2015 的模块化

## 使用
`export default`  --> `import xx from ''`
`export`  --> `import {} from ''`

实际上每个模块export的是类似于这种的对象
``` 
Object [Module] 
{ 
  a1: [Getter], 
  a2: [Getter], 
  default: [Getter] 
}
```
- `import {a1, a2} from` '': 相当于解构赋值，
- `import xx from ''`: 就是语言层面的特殊语法糖，xx相当于Module.default.
- `import { default } from ''`: default是关键字，没有这种写法

## 打包机制
- 浏览器环境不支持，需要用webpack之类的提前打包
- nodejs开始支持，但只是`Experimental`阶段，而且社区都在沿用commomjs，就不多赘述了。
