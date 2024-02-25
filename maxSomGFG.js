// TODO: Not complete there is some error in 1200 my output is 1400 while expected in 1755


const maxSum = (n) => {
	let sum = 0;
	if (n % 2 === 0) {
		let num = maxSum(n / 2);
		sum += num;
	}
	if (n % 3 === 0) {
		let num = maxSum(n / 3);
		sum += num;
	}
	if (n % 4 === 0) {
		let num = maxSum(n / 4);
		sum += num;
	}

	if (sum > n) {
		return sum;
	} else {
		return n;
	}
};
console.log(maxSum(24));
