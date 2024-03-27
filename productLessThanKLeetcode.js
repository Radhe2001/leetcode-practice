var numSubarrayProductLessThanK = function (nums, k) {
	let counter = 0;
	for (let i = 0; i < nums.length; i++) {
		let mul = 1;
		let arr = [];
		for (let j = i; j < nums.length; j++) {
			let res = mul * nums[j];
			if (res < k) {
                arr.push(nums[j]);
				mul *= nums[j];
				counter++;
			}
		}
	}
	return counter;
};
console.log(numSubarrayProductLessThanK([1, 2, 3], 6));
