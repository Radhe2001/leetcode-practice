// FIXME:Missing number in array ==>> GeeksForGeeks

const missingNumber = (array, n) => {
	/*// FIXME:Time complexity is more
	for (let i = 1; i <= n; i++) {
		let index = array.indexOf(i);
		if (index == -1) {
			console.log(i);
		}
	}*/


	/* // FIXME: More optimazation is required
	let sortedArray = array.sort((a, b) => {
		return a - b;
	});
	for (let i = 0; i < n; i++){
		if (sortedArray[i] !== i + 1) {
			return i + 1;
		}
	} */

	let totalSum = (n * (n + 1)) / 2;
	let sum = 0;
	for (let i = 0; i < n-1; i++){
		sum += array[i];
	}
	return totalSum - sum;
};

console.log(missingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5], 10));
