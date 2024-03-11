const duplicates = (a, n) => {
	// FIXME:Need to be fixed
	// let obj = {};
	// let arr2 = [];
	// for (let i = 0; i < a.length; i++) {
	// 	if (obj[a[i]] === undefined) {
	// 		obj[a[i]] = 1;
	// 	} else {
	// 		if (obj[a[i]] === 1) {
	// 			arr2.push(a[i]);
	// 		}
	// 		obj[a[i]]++;
	// 	}
	// }
	// let arr3 = [];
	// for (let i = 0; i < a.length; i++) {
	// 	if (arr2.indexOf(a[i]) !== -1) {
	// 		if (!(arr3.indexOf(a[i]) !== -1)) {
	// 			arr3.push(a[i]);
	// 		}
	// 	}
	// }
	// if (arr3.length === 0) arr3.push(-1);
	// console.log(arr3);
	// return arr3;

	let set = new Set();
	for (let i = 0; i < a.length; i++) {
		let index = a.indexOf(a[i]);
		if (index !== i) {
			set.add(a[i]);
		}
	}
	let arr = Array.from(set);
	return arr.length === 0 ? [-1] : arr;
};

duplicates([2, 3, 1, 2, 3], 10);
// [3,4,12]
