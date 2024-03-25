var divide = function (dividend, divisor) {
	let count = 1;
	let sum = 0;
	let pos =
		(dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0)
			? true
			: false;
	if (dividend < 0) dividend = dividend - dividend - dividend;
	if (divisor < 0) divisor = divisor - divisor - divisor;
	let temp = divisor;
	while (temp <= dividend) {
		dividend = dividend - temp;
		count = count << 1;
		sum += count;
		temp = temp << 1;
	}
	console.log(dividend, divisor, count, sum);
};
console.log(divide(-32, -3));
