const sort012 = (arr, N) => {
	let zero = (one = two = 0);
	for (let i = 0; i < N; i++) {
		if (arr[i] == 0) {
			zero++;
		} else if (arr[i] == 1) {
			one++;
		} else {
			two++;
		}
	}
	let index = 0;
	for (let i = 0; i < index + zero; i++) {
		arr[i] = 0;
	}
	for (let i = zero; i < index + zero + one; i++) {
		arr[i] = 1;
	}
	for (let i = zero + one; i < index + zero + one + two; i++) {
		arr[i] = 2;
	}
};
sort012([0, 2, 1, 2, 0], 5);
