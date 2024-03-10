var firstMissingPositive = function (nums) {
	// let min = Math.min(...nums),
	// 	max = Math.max(...nums);
	// if (min <= 1) min = 1;
	// else return 1;
	// for (let i = min; i < max; i++) {
	// 	let index = nums.indexOf(i);
	// 	if (index === -1) return i;
	// }
	// return max >= 1 ? max + 1 : 1;

	// let min = 1,
	// 	i = 0,
	// 	max = Math.max(...nums),
	// 	j = nums.length;
	// while (i++ < j) {
	// 	let index = nums.indexOf(min);
	// 	if (index === -1) return min;
	// 	min++;
	// }
	// return max >= 1 ? max + 1 : 1;
	nums = nums
		.sort((a, b) => a - b)
		.filter((element, index) => {
			if (index < nums.length - 1) {
				if (nums[index] !== nums[index + 1]) {
					return element;
				}
			} else {
				return element;
			}
        });
    console.log(nums);
	let i = nums.indexOf(1);
	if (i === -1) return 1;
	let count = 1;
	for (let index = i; index < nums.length; index++) {
		if (nums[index] !== count) return count;
		count++;
	}
	return count;
};
console.log(firstMissingPositive([0, 2, 2, 1, 1]));
