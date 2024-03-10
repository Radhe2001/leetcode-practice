var addBinary = function (a, b) {
	let i = a.length - 1,
		j = b.length - 1,
		s = '',
		carry = '0';
	while (i >= 0 || j >= 0) {
		let x = a[i],
			y = b[j];
		if ( x=== undefined) x = '0';
		if ( y=== undefined) y = '0';
		if (
			(x === '1' && y === '0' && carry === '0') ||
			(x === '0' && y === '1' && carry === '0') ||
			(x === '0' && y === '0' && carry === '1')
		) {
			carry = '0';
			s = '1' + s;
		} else if (
			(x === '1' && y === '0' && carry === '1') ||
			(x === '0' && y === '1' && carry === '1') ||
			(x === '1' && y === '1' && carry === '0')
		) {
			carry = '1';
			s = '0' + s;
		} else if (x === '0' && y === '0' && carry === '0') {
			carry = '0';
			s = '0' + s;
		} else if (x === '1' && y === '1' && carry === '1') {
			carry = '1';
			s = '1' + s;
		}
		i--;
		j--;
	}
	if (carry === '1') s = '1' + s;
	return s;
};
console.log(addBinary('1010', '1011'));
