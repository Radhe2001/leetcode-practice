// TODO: This problem has been solved

var minimumLength = function (s) {
	let match = true;
	let str = s;
	while (match) {
		if (str[0] === str[str.length - 1]) {
			if (str.length === 0) return 0;
			if (str.length === 1) return 1;
			let i = 0;
			j = str.length - 1;
			while (str[i] === str[i + 1]) {
				i++;
			}
			while (str[j] === str[j - 1]) {
				j--;
			}
			str = str.slice(i + 1, j);
			console.log(str);
		} else {
			match = false;
		}
	}
	return str.length;
};
console.log(
	minimumLength('bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb')
);
