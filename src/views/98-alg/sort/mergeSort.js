Array.prototype.mergeSort = function () {
	const rec = (arr) => {
		if (arr.length === 1) {
			return arr
		}
		const mid = Math.floor(arr.length / 2)
		const left = arr.slice(0, mid)
		const right = arr.slice(mid, arr.length)
		const orderLeft = rec(left)
		const orferRight = rec(right)
		const res = []
		while (orderLeft.length || orferRight.length) {
			if (orderLeft.length && orferRight.length) {
				res.push(
					orderLeft[0] < orferRight[0] ? orderLeft.shift() : orferRight.shift()
				)
			} else if (orderLeft.length) {
				res.push(orderLeft.shift())
			} else if (orferRight.length) {
				res.push(orferRight.shift())
			}
		}
		return res
	}
	const res = rec(this)
	res.forEach((n, i) => {
		this[i] = n
	})
}

const arr = [5, 4, 3, 2, 1]
arr.mergeSort()
