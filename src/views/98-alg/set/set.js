const arr = [1, 1, 2, 2]
const arr2 = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(4)

// 求交集
const set2 = new Set([2, 3])
const set3 = new Set([...set].filter((item) => set2.has(item)))

let mySet = new set()
mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some text')
let o = { a: 1, b: 2 }
mySet.add(o)
mySet.add({ a: 1, b: 2 })
35285279
const has1 = mySet.has(o)
mySet.delete(5)
