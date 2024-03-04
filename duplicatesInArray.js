const duplicates = (a, n) => {
	let obj = {};
	let arr2 = [];
	for (let i = 0; i < a.length; i++) {
		if (obj[a[i]] === undefined) {
			obj[a[i]] = 1;
		} else {
			if (obj[a[i]] === 1) {
				arr2.push(a[i]);
			}
			obj[a[i]]++;
		}
	}
	let arr3 = [];
	for (let i = 0; i < a.length; i++) {
		if (arr2.indexOf(a[i]) !== -1) {
			if (!(arr3.indexOf(a[i]) !== -1)) {
				arr3.push(a[i]);
			}
		}
	}
	if (arr3.length === 0) arr3.push(-1);
	console.log(arr3);
	return arr3;
};

duplicates([7,6,8,4,9,8,4,7,4,4], 10);
// [3,4,12]
