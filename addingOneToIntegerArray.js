var plusOne = function (digits) {
	let carry = 1;
	if (digits[digits.length - 1] <= 8) {
		digits[digits.length - 1] = digits[digits.length - 1] + 1;
		return digits;
	}
	let i = digits.length - 1;
	while ((digits[i] === 9 || carry === 1) && i >= 0) {
		let sum = digits[i] + carry;
		carry = 0;
		if (sum > 9) {
			digits[i] = sum % 10;
			carry = 1;
		} else {
			digits[i] = sum;
		}
		i--;
	}
	if (carry === 1) {
		digits = [1].concat(digits);
	}
	return digits;
};
console.log(plusOne([9,2,1]));
