var maximumGap = function (nums) {
	nums.sort((a, b) => a - b);
	let max = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		let diff = nums[i + 1] - nums[i];
		if (diff > max) max = diff;
	}
	return max;
};
console.log(maximumGap([10]));
