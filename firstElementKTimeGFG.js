function firstElementKTime(n, k, arr) {
	let obj = {};
	for (let i = 0; i < n; i++) {
		if (obj[arr[i]] == undefined) {
			obj[arr[i]] = 1;
		} else {
			obj[arr[i]] += 1;
		}
		if (obj[arr[i]] === k) {
			return arr[i];
		}
    }
    return -1;
}

console.log(firstElementKTime(7, 2, [1, 7, 4, 3, 4, 8, 7]));
