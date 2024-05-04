/* const json = {
	a: { b: { c: 1 } },
	d: [1, 2],
}

const dfs1 = (n, path) => {
	console.log(n, path)
	Object.keys(n).forEach((k) => {
		dfs1(n[k], path.concat(k))
	})
}

dfs1(json, []) */

const tree = {
	val: 'a',
	children: [
		{
			val: 'b',
			children: [
				{
					val: 'd',
					children: [],
				},
				{
					val: 'e',
					children: [],
				},
			],
		},
		{
			val: 'c',
			children: [
				{
					val: 'f',
					children: [],
				},
				{
					val: 'g',
					children: [],
				},
			],
		},
	],
}

const dfs = (root) => {
	console.log(root.val)
	root.children.forEach(dfs)
}

//dfs(tree)

const bfs = (root) => {
	const q = [root]
	while (q.length) {
		const n = q.shift()
		console.log(n.val)
		n.children.forEach((child) => {
			q.push(child)
		})
	}
}

bfs(tree)
