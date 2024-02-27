function print2largest(arr, n) {
	arr = arr.sort((a, b) => a - b);
	let index = arr.indexOf(arr[arr.length - 1]);
	if (index === 0) return -1;
	return arr[index - 1];
}
console.log(print2largest([10, 5, 10], 3));
