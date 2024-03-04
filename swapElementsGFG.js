function swapElements(n, arr) {
	function swap(i, j) {
		let c = arr[i];
		arr[i] = arr[j];
		arr[j] = c;
	}
	for (let i = 0; i < n - 2; i++) {
		swap(i, i + 2);
	}
	let str = '';
	for (let i = 0; i < n; i++) {
		str += arr[i] + ' ';
	}
	console.log(str);
}
console.log(swapElements(5, [1, 2, 3, 4, 5]));
