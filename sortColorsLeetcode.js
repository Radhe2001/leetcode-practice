var sortColors = function (nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
		else obj[nums[i]]++;
	}
	let arr = [];
	for (const key in obj) {
		let i = 0;
		while (i < obj[key]) {
			arr.push(parseInt(key));
			i++;
		}
	}
	for (let i = 0; i < nums.length; i++) nums[i] = arr[i];
	return nums;
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
