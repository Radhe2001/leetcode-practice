function kthSmallest(arr, l, r, k) {
	arr.sort((a, b) => a - b);
	return arr[l + k - 1];
}

console.log(kthSmallest([7, 10, 4, 20, 15], 0, 4, 4));
