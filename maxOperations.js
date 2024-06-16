var maxOperations = function (nums, k) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		let j = i + 1;
		if (nums[i] >= k || nums[i] === 0) continue;
		while (j < nums.length && nums[i] + nums[j] !== k) j++;
		if (nums[i] + nums[j] === k) {
			nums[i] = nums[j] = 0;
			count++;
		}
	}
	return count;
};
console.log(
	maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)
);
