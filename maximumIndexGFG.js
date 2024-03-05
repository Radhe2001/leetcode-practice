function maxIndexDiff(A, N) {
	// FIXME: Optimization is required
	let max = 0;
	for (let i = 0; i < A.length; i++) {
		let j = A.length - 1;
		while (j > i) {
			if (A[j] >= A[i]) {
				let diff = j - i;
				if (diff > max) max = diff;
				break;
			}
			j--;
		}
	}
	console.log(max);
}

console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1, 35], 10));
