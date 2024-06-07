var isPowerOfThree = function (n) {
	if (n === 1 || n === 3) return true;
	else if (n <= 0) return false;
	else {
		let sum = 0;
		n.toString()
			.split('')
			.forEach((element) => {
				sum += parseInt(element);
			});
		if (sum % 9 === 0) {
			n = parseInt(n);
			if (n % 2 === 0 || n % 5 === 0 || n % 7 === 0) return false;
			else return true;
		} else return false;
	}
};
console.log(isPowerOfThree(81));
