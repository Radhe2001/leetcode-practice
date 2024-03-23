var trailingZeroes = function (n) {
	let zeros = 0,
		t = 5;
	while (true) {
		let d = Math.floor(n / t);
		zeros += d;
		t *= 5;
		if (d === 0) break;
	}
	return zeros;
};
console.log(trailingZeroes(0));
