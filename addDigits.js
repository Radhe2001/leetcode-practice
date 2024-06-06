var addDigits = function (num) {
	let str = num.toString();
	while (str.length !== 1) {
		let sum = 0;
		str.split('').forEach((element) => (sum += parseInt(element)));
		str = sum.toString();
	}
	return parseInt(str);
};
console.log(addDigits(0));
