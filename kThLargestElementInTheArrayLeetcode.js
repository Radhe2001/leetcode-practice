var findKthLargest = function (nums, k) {
    // FIXME:Time limit exceeding
	let min = Math.min(...nums);
	while (k-- > 1) {
		let max = Math.max(...nums);
		nums[nums.indexOf(max)] = min;
	}
	return Math.max(...nums);
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
