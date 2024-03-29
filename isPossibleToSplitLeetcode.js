var isPossibleToSplit = function (nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (!obj[nums[i]]) obj[nums[i]] = 1;
		else if (obj[nums[i]] === 2) return false;
		else obj[nums[i]]++;
	}
	return true;
};
console.log(isPossibleToSplit([1, 1, 1, 1]));
