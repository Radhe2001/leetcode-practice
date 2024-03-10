var maxArea = function (arr) {
	// FIXME:Time complexity problem
	// if (arr.length <= 1) return 0;
	// let amount = 0;
	// arr.forEach((element, index) => {
	// 	for (let i = index + 1; i < arr.length; i++) {
	//         let min = element <= arr[i] ? element : arr[i];
	// 		let mul = (i - index) * min;
	// 		amount = amount < mul ? mul : amount;
	// 	}
	// });
	// return amount;
	let left = 0,
		right = arr.length - 1,
		amount = 0;
    while (left < right) {
		let min = Math.min(arr[left], arr[right]);
		let result = min * (right - left);
		if (result > amount) amount = result;
		arr[left] > arr[right] ? right-- : left++;
	}
	return amount;
};
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));