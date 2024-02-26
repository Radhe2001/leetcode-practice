function leaders(arr, n) {
	let a = [];
	let index = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (a.length === 0) {
			a.push(arr[i]);
		} else {
			if (arr[i] >= a[index]) {
				a.push(arr[i]);
				index++;
			}
		}
	}
	for (let i = 0; i < a.length / 2; i++) {
		let num = a[a.length - i - 1];
		a[a.length - i - 1] = a[i];
		a[i] = num;
	}
	return a;
}

console.log(leaders([1, 2, 3, 4, 0], 5));
