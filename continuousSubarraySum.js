var checkSubarraySum = function (nums, k) {
	let isTrue = false;
	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		if (isTrue) break;
		nums.forEach((element, index) => {
			if (index >= i) {
				sum += element;
				if (index - i >= 1)
					if (sum === k || sum % k === 0) isTrue = true;
			}
		});
	}
	return isTrue ? true : false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
