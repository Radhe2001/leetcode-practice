var majorityElement = function (nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
		else obj[nums[i]]++;
	}
	for (const key in obj)
		if (obj[key] > Math.floor(nums.length / 2)) return parseInt(key);
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
