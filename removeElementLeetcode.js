var removeElement = function (nums, val) {
	if (nums.length === 1 && nums[0] === val) return 0;
	let j = nums.length - 1;
	for (let i = 0; i <= j; i++) {
		while (nums[j] === val) {
			if (j === i) return [j];
			j -= 1;
		}
		if (nums[i] === val) {
			let a = nums[i];
			nums[i] = nums[j];
			nums[j] = a;
			j -= 1;
		}
	}
	return [j + 1];
};
console.log(removeElement([3, 2, 2, 3], 3));
