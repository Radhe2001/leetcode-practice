var numSubarraysWithSum = function (nums, goal) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			let k = i;
			let sum = 0;
			while (k <= j) {
				if (sum === goal) {
					count++;
					console.log(i, j);
					break;
				}
				sum += nums[k++];
			}
		}
	}
	console.log(count);
};
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
