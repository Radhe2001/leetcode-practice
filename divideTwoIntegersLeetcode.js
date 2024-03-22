var divide = function (dividend, divisor) {
	let count = 0,
		dendRev = false,
		devRev = false;
	if (dividend < 0) {
		dividend = dividend - dividend - dividend;
		dendRev = true;
	}
	if (divisor < 0) {
		divisor = divisor - divisor - divisor;
		devRev = true;
	}

	while (dividend >= divisor) {
        dividend = dividend ^ divisor;
        console.log(dividend);
		count++;
	}
	if (
		!(
			(devRev == false && dendRev == false) ||
			(devRev == true && dendRev == true)
		)
	) {
		count = count - count - count;
	}
	return count;
};
console.log(divide(-10, -3));
