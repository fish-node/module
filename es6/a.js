console.log('will only be excuted once')

export let a1 = 1111
export let a2 = {}

let a = 'aaaa'
export default a

// 尽然不支持这种写法。。。也是奇葩
// export default let a = 'aaaa'

a2.name = 'a2'