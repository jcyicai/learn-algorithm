const a = { val: 1 }
const b = { val: 2 }
const c = { val: 3 }
a.next = b
b.next = c
c.next = null

// 遍历链表
let p = a
while (p) {
	console.log(p.val)
	p = p.next
}

// 插入
const d = { val: 4 }
b.next = d
d.next = c

// 删除 (修改 next)
b.next = c

// 反转链表
let p1 = a
let p2 = null
while (p1) {
	const tmp = p1.next
	p1.next = p2
	p2 = p1
	p1 = tmp
}
