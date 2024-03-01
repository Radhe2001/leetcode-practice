//  Done the problem successfully
function peakElement(arr, n) {
	for (let i = 0; i < n; i++) {
		if (i == 0 && arr[i] >= arr[i + 1]) return i;
		if (i == n - 1 && arr[n - 1] >= arr[n - 2]) return i;
		if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
	}
	return -1;
}

console.log(peakElement([1, 1, 1, 2, 1, 1, 1], 7));
