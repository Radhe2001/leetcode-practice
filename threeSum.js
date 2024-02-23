var threeSum = function (nums) {
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					const arr1 = [nums[i], nums[j], nums[k]];
					arr = [...arr, arr1];
				}
			}
		}
	}
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		let unique = true;
		for (let j = i + 1; j < arr.length; j++) {
			let a = arr[i];
			let b = arr[j];
			a.sort();
			b.sort();
			if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) {
				unique = false;
				// console.log(arr[i], arr[j]);
				break;
			}
		}
		if (unique) {
			arr2 = [...arr2, arr[i]];
		}
	}
	return arr2;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
