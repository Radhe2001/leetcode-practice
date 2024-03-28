var singleNumber = function (nums) {
	let obj = {},
		arr = [];
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
		else obj[nums[i]]++;
	}
	for (let key in obj) {
		if (obj[key] === 1) arr.push(parseInt(key));
	}
	return arr;
};
console.log(singleNumber([0, 1]));
