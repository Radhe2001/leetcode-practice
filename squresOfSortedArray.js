var sortedSquares = function (nums) {
	// FIXME: This will return an sorted array of squares of num but it won't have any duplicate values
	// let obj = {};
	// for (let i = 0; i < nums.length; i++) {
	// 	if (obj[nums[i]] === undefined) {
	// 		let square = nums[i] * nums[i];
	// 		obj[square] = 0;
	// 	}
	// }
	// let arr = [];
	// for (let i in obj) {
	// 	arr.push(parseInt(i));
	// }
	// return arr;

	for (let i = 0; i < nums.length; i++) {
		nums[i] = nums[i] * nums[i];
	}
	nums = nums.sort((a, b) => a - b);
	return nums;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));
