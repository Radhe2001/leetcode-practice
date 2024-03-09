var maxFrequencyElements = function (nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) {
			obj[nums[i]] = 1;
		} else {
			obj[nums[i]]++;
		}
	}
	let max = Math.max(...Object.values(obj));
	let count = 0;
	let arr = Object.keys(obj)
		.filter((key) => {
			if (obj[key] === max) return obj[key];
		})
		.forEach((e) => count++);
	return count * max;
};
console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
