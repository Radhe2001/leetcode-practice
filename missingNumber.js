var missingNumber = function (nums) {
	let sum = 0;
	nums.forEach((element) => (sum += element));
	return (nums.length * (nums.length + 1)) / 2 - sum;
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
