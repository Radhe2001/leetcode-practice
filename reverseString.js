const reverseString = (num) => {
	if (num < 0) {
		num = num - 2 * num;
		let str = num.toString();
		str = (() => {
			let str1 = '';
			for (let i = str.length - 1; i >= 0; i--) {
				str1 += str[i];
			}
			return str1;
		})();
		str = '-' + str;
		if ((parseInt(str) >= -2147483648)) {
			return parseInt(str);
		} else {
			return 0;
		}
	} else {
		let str = num.toString();
		str = (() => {
			let str1 = '';
			for (let i = str.length - 1; i >= 0; i--) {
				str1 += str[i];
			}
			return str1;
		})();
		if ((parseInt(str) <= 2147483647)) {
			return parseInt(str);
		} else {
			return 0;
		}
	}
};

console.log(reverseString(1534236469));
