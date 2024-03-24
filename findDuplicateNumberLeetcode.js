var findDuplicate = function (nums) {
	// TODO:One way to do this problem using object
	// let obj = {};
	// for (let i = 0; i < nums.length; i++) {
	// 	if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
	// 	else return nums[i];
	// }

	// TODO:Another way to doing this problem using set
	let set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) return nums[i];
		set.add(nums[i]);
	}
	return -1;
};
console.log(findDuplicate([3, 3, 3, 3, 3]));