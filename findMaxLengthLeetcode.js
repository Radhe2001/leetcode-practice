var findMaxLength = function (nums) {
    // FIXME:Not working properly
	let counter = 0,
		iter = 0;
	for (let i = 0; i < nums.length; i++) {
		if (counter >= 0) {
			if (nums[i] === 0) counter++;
			else {
				if (counter > 0) iter++;
				counter--;
			}
		}
		if (counter < 0) counter = 0;
	}
	return 2 * iter;
};
console.log(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0]));
