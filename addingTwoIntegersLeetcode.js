var getSum = function (a, b) {
	a = a.toString(2);
	b = b.toString(2);
	let str = '';
	carry = '0';
	let count = a.length > b.length ? a.length : b.length;
	for (let i = 0; i < count; i++) {
		str = (a[a.length - 1 - i] ^ b[b.length - 1 - i] ^ carry) + str;
		carry =
			(a[a.length - 1 - i] & b[b.length - 1 - i]) |
			((a[a.length - 1 - i] ^ b[b.length - 1 - i]) & carry);
	}
	str = carry + str;
	return parseInt(str, 2);
};
console.log(getSum(2, 3));
