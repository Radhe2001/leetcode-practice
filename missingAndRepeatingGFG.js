// TODO: complete
const findTwoElement = (arr, n) => {
	/*
    // time limit is exceeding
        let dup;
        let sum = 0;
        let total = (n * (n + 1)) / 2;
        for (let i = n - 1; i >= 0; i--) {
            if (arr.indexOf(arr[i]) !== i) dup = arr[i];
            sum += arr[i];
        }
        let miss = total - (sum - dup);
        return [dup, miss];
    */
    
	let dup;
	let sum = 0;
	let total = (n * (n + 1)) / 2;
	arr = arr.sort((a, b) => a - b);
	for (let i = 0; i < n; i++) {
		if (arr[i] == arr[i + 1]) dup = arr[i];
		sum += arr[i];
	}
	let miss = dup + (total - sum);
	return [dup, miss];
};

console.log(findTwoElement([1, 3, 3], 3));
