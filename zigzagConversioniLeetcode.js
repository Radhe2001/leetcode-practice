var convert = function (s, numRows) {
	if (numRows === 1) return s;
	let arr = [];
	let i = 0,
		j = 0,
		reverse = false;
	while (j <= numRows && i < s.length) {
		if (j === numRows) {
			reverse = true;
			j -= 2;
		}
		if (j === -1) {
			reverse = false;
			j += 2;
		}
		if (arr[j] === undefined) arr[j] = '';
		arr[j] += s[i];
		if (reverse) j--;
		else j++;
		i++;
	}
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += arr[i];
	}
	return str;
};
console.log(convert('PAYPALISHIRING', 4));
