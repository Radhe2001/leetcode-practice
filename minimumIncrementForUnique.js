var minIncrementForUnique = function (nums) {
	// TODO: Time limit issue to be resolved
	/*
    let count = 0;
	for (let i = 0; i < nums.length; i++)
		while (nums.indexOf(nums[i]) !== i) {
			nums[i]++;
			count++;
		}
	return count;*/

	/*HINT:
    1. sort the arrray first 
    2. loop through array 
    3. find the duplicate value 
    4. find the first missing value
    5. replace the duplicate value with the first missing value and store the difference
     */

	// FIXME: Error occured
	let count = 0,
		missing = 0;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (nums.indexOf(nums[i]) !== i) {
			while (
				nums[missing + 1] - nums[missing] <= 1 &&
				nums[missing + 1] - nums[missing] !== NaN
			)
				missing++;
			console.log(nums[missing]);
			count += nums[missing] - nums[i] + 1;
			let c = nums[missing] + 1;
			nums[i] = nums[missing];
			nums[missing] = c;
		}
	}
	return count;
};
console.log(minIncrementForUnique([0, 2, 2]));
