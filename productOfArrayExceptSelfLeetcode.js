var productExceptSelf = function (nums) {
	// FIXME:Time limit exceeding
	// let arr = [];
	// for (let i = 0; i < nums.length; i++) {
	// 	let product = 1;
	// 	for (let j = 0; j < nums.length; j++) {
	// 		if (j !== i) product *= nums[j];
	// 	}
	// 	if (product === -0) product = 0;
	// 	arr.push(product);
	// }
	// return arr;
	let product = 1,
		counter = 0,
		index = -1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) product *= nums[i];
		else {
			counter++;
			index = i;
		}
    }
	if (counter > 1) product = 0;
	for (let i = 0; i < nums.length; i++) {
		if (counter === 1 && index === i) nums[i] = product;
		else {
			if (counter === 0) nums[i] = product / nums[i];
			else nums[i] = 0;
		}
    }
    return nums;
};
console.log(productExceptSelf([-1,1,0,3,-3]));
