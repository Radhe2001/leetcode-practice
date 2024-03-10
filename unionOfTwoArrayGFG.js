function doUnion(a, n, b, m) {
	let set = new Set();
	for (let i = 0; i < n; i++) {
		set.add(a[i]);
	}
	for (let i = 0; i < m; i++) {
		set.add(b[i]);
	}
	return set.size;
}
console.log(doUnion([85, 25, 1, 32, 54, 6], 6, [85, 2], 2));
