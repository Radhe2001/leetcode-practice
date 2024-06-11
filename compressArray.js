var compress = function (chars) {
	let str = '',
		temp = '',
		counter = 0;

	for (let i = 0; i < chars.length; i++) {
		if (chars[i] !== chars[i - 1]) temp = chars[i];
		counter++;
		if (chars[i] !== chars[i + 1]) {
			if (counter === 1) str += temp;
			else str += temp + counter;
			counter = 0;
		}
	}
	for (let i = 0; i < str.length; i++) chars[i] = str[i];
	while (chars.length - str.length !== 0) chars.pop();
	return chars;
};
console.log(
	compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])
);
