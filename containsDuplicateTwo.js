var containsNearbyDuplicate = function (nums, k) {
	// TODO: Time limit exceeding
	/*
    for (let i = 0; i < nums.length; i++)
		for (let j = i + 1; j < i + k + 1; j++)
			if (nums[i] === nums[j] && j - i <= k) return true;
	return false;
    */
	// FIXME: no use
	/*
    let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) obj[nums[i]] = 1;
		else obj[nums[i]]++;
	}
	obj = Object.keys(obj)
		.filter((key) => obj[key] !== 1)
		.reduce((newObj, key) => {
			newObj[key] = obj[key];
			return newObj;
		}, {});
        */
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
