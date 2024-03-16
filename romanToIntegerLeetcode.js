var romanToInt = function (s) {
	function find(t) {
		switch (t) {
			case 'M':
				return 1000;
			case 'D':
				return 500;
			case 'C':
				return 100;
			case 'L':
				return 50;
			case 'X':
				return 10;
			case 'V':
				return 5;
			case 'I':
				return 1;
		}
	}
	let prev = 0;
	let sum = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		let val = find(s[i]);
		if (val >= prev) {
			sum += val;
			prev = val;
		} else {
			sum -= val;
		}
	}
	return sum;
};
console.log(romanToInt('XLVIII'));
