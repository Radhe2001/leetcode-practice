// FIXME:Need to be fixed (issue of time complexity)

function subarraySum(arr, n, s) {
	if (s === 0) {
		if (arr.indexOf(0) === -1) {
			return [-1];
		} else {
			return [arr.indexOf(0) + 1, arr.indexOf(0) + 1];
		}
	}
	if (s === arr[0]) {
		return [1, 1];
	}
	for (let i = 0; i < n; i++) {
		let j = i;
		let sum = 0;
		while (sum < s) {
			sum += arr[j];
			j++;
			if (j === n) break;
		}
		if (sum === s) {
			if (n === 1) return [1, 1];
			return [i + 1, j];
		}
	}
	return [-1];
}
console.log(subarraySum([0], 1, 0));
