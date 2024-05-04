const bt = {
	val: 1,
	left: {
		val: 2,
		left: { val: 4, left: null, right: null },
		right: {
			val: 5,
			left: null,
			right: null,
		},
	},
	right: {
		val: 3,
		left: {
			val: 6,
			left: null,
			right: null,
		},
		right: {
			val: 7,
			left: null,
			right: null,
		},
	},
}

// 前序
const preorder = (root) => {
	if (!root) return
	console.log(root.val)
	preorder(root.left)
	preorder(root.right)
}
//preorder(bt)

// 先序遍历 非递归版
const preorder1 = (root) => {
	if (!root) return
	const stack = [root]
	while (stack.length) {
		const n = stack.pop()
		console.log(n.val)
		if (n.right) stack.push(n.right)
		if (n.left) stack.push(n.left)
	}
}
//preorder1(bt)

// 中序
const inorder = (root) => {
	if (!root) return
	inorder(root.left)
	console.log(root.val)
	inorder(root.right)
}
//inorder(bt)

// 中序遍历 非递归版
const inorder1 = (root) => {
	if (!root) return
	const stack = []
	let p = root
	while (stack.length || p) {
		while (p) {
			stack.push(p)
			p = p.left
		}
		const n = stack.pop()
		console.log(n.val)
		p = n.right
	}
}
//inorder1(bt)

// 后序
const postorder = (root) => {
	if (!root) return
	postorder(root.left)
	postorder(root.right)
	console.log(root.val)
}
//postorder(bt)

// 后续遍历 非递归版
const postorder1 = (root) => {
	if (!root) return
	const stack = [root]
	const outputStack = []
	while (stack.length) {
		const n = stack.pop()
		outputStack.push(n)
		if (n.left) stack.push(n.left)
		if (n.right) stack.push(n.right)
	}
	while (outputStack.length) {
		const n = outputStack.pop()
		console.log(n.val)
	}
}
postorder1(bt)
