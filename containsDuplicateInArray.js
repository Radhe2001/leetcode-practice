var containsDuplicate = function (nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
		else return true;
	}
	return false;
};
console.log(containsDuplicate([1, 2, 3, 4, 5]));
