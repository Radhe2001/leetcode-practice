var intToRoman = function (num) {
    // TODO:Need to be solved as it is incomplete
	function find(n) {
		if (n >= 1000) {
			return 1000;
		} else if (n >= 500) {
			return 500;
		} else if (n >= 100) {
			return 100;
		} else if (n >= 50) {
			return 50;
		} else if (n >= 10) {
			return 10;
		} else if (n >= 5) {
			return 5;
		} else {
			return 1;
		}
	}

	let str = '';
	while (num !== 0) {
		let temp = find(num);
	}
};
console.log(intToRoman(58));
