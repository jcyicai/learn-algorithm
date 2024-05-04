const json = {
	a: { b: { c: 1 } },
	d: { e: 1 },
}
const path = ['a', 'b', 'c']
let p = json
path.forEach((key) => {
	p = p[key]
})
