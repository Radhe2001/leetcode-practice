var combinationSum = function (candidates, target) {
	let arr = [[]];
	for (let i = 0; i < candidates.length; i++) {
		let count = arr.length;
		for (let j = 0; j < count; j++) {
			let temp = arr[j].slice(0, arr[j].length);
			temp.push(candidates[i]);
			arr.push(temp);
		}
	}
	arr.forEach((ele) => {
		ele.sort((a, b) => a - b);
	});
	let arr1 = arr.filter((a) => JSON.stringify(a));
	let s = new Set(arr1);
	console.log(s.length);
	// let out = arr.filter((ele, i) => {
	// 	let sum = 0;
	// 	for (let t of ele) sum += t;
	// 	// console.log(ele, sum);
	// 	if (sum === target) return ele;
	// });
	// return out;
};
console.log(combinationSum([2, 5, 2, 1, 2], 5));
