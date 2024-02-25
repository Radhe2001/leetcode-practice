// TODO:Completed

var titleToNumber = function (columnTitle) {
	let mul = 1;
	let sum = 0;
	let arr = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	for (let i = columnTitle.length - 1; i >= 0; i--) {
		sum += (arr.indexOf(columnTitle[i]) + 1) * mul;
		mul *= 26;
	}
	return sum;
};
console.log(titleToNumber('AB'));
