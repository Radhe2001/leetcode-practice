// this problem is solved
function majorityElement(a, size) {
	let obj = {};
	for (let i = 0; i < a.length; i++) {
		if (obj[a[i]] === undefined) {
			obj[a[i]] = 1;
		} else {
			obj[a[i]]++;
		}
	}
	let mid = Math.floor(size / 2);
	let array = Object.keys(obj);
	for (let i = 0; i < array.length; i++) {
		if (obj[array[i]] > mid) return parseInt(array[i]);
	}
	return -1;
}

console.log(majorityElement([3, 1, 3, 3, 2], 5));
