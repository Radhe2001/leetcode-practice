var increasingTriplet = function (nums) {
    // FIXME: Time limit exceeding
	let arr = [[]];
	for (let i = 0; i < nums.length; i++) {
		let n = arr.length;
		for (let j = 0; j < n; j++) {
			let a = arr[j].slice(0, arr[j].length);
			a.push(nums[i]);
			arr.push(a);
		}
	}
	arr = arr.filter((ele) => ele.length === 3);
	console.log(arr);
	for (let i = 0; i < arr.length; i++)
		if (arr[i][0] < arr[i][1] && arr[i][1] < arr[i][2]) return true;
	return false;
};
console.log(increasingTriplet([5, 4, 3, 2, 1]));
