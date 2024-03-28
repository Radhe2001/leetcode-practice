var maxSubarrayLength = function (nums, k) {
	// FIXME:Time complexity problem
	// let count = 0;
	// for (let i = 0; i < nums.length; i++) {
	// 	let obj = {};
	// 	let j = null;
	// 	for (j = i; j < nums.length; j++) {
	// 		if (obj[nums[j]] === undefined) obj[nums[j]] = 1;
	// 		else if (obj[nums[j]] < k) obj[nums[j]]++;
	// 		else break;
	// 	}
	// 	if (j - i > count) count = j - i;
	// }
	// return count;
	let i = 0,
		j = 0,
		obj = {},
		max = 1;
	while (i < nums && j < n) {
		if (!obj[nums[j]]) obj[nums[j]] = 0;
		obj[nums[j]]++;
		while (obj[nums[j]] > k) obj[nums[i++]]--;
		max = Math.max(max, j++ - i + 1);
	}
	return max;
};
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 6], 2));
