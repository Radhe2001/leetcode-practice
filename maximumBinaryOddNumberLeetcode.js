var maximumOddBinaryNumber = function (s) {
	let i = 0,
		count = 0;
	while (i < s.length) {
		if (s[i] === '1') {
			count++;
		}
		i++;
	}
	let t = 0;
	let str = '';
	while (t < count - 1) {
		str += '1';
		t++;
	}
	while (t < s.length - 1) {
		str += '0';
		t++;
	}
	str += '1';
	return str;
};
console.log(maximumOddBinaryNumber('0101'));
