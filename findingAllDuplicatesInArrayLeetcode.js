var findDuplicates = function (nums) {
	let arr = [];
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
		else arr.push(nums[i]);
	}
	return arr;
};
console.log(findDuplicates([1]));
