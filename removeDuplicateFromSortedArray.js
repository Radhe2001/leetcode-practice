var removeDuplicates = function (nums) {
	// let count = 0;
	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] !== nums[i + 1]) {
	// 		count++;
	// 	} else {
	// 		nums[i] = 101;
	// 	}
	// }
	// console.log(nums.sort((a, b) => a - b));

	// return count;

	let i = 0;
	for (let j = 1; j < nums.length; j++) {
		if (nums[i] !== nums[j]) {
			nums[i+1] = nums[j];
			i++;
		}
	}
	return i + 1;
};
let arr = [1, 1, 9];
console.log(removeDuplicates(arr));
console.log(arr);
