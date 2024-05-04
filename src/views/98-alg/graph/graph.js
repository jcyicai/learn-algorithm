const graph = {
	0: [1, 2],
	1: [2],
	2: [0, 3],
	3: [3],
}

const visited = new Set()
const dfs = (n) => {
	console.log(n)
	visited.add(n)
	graph[n].forEach((c) => {
		if (!visited.has(c)) {
			dfs(c)
		}
	})
}

//dfs(2)

// 广度优先
const visited1 = new Set()
const q = [2]
visited1.add(2)
while (q.length) {
	const n = q.shift()
	console.log(n)
	graph[n].forEach((c) => {
		if (!visited1.has(c)) {
			q.push(c)
			visited1.add(c)
		}
	})
}
