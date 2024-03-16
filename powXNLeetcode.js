var myPow = function (x, n) {
	// TODO:Can you do it in another way
    // return Math.pow(x, n);
    
    // FIXME:Time complexity problem
	if (x === 0 || x === 1) return x;
	if (n === 0) {
		return 1;
	} else {
		let pow = 1;
		if (n < 0) {
			t = n - 2 * n;
			while (t > 0) {
				pow *= x;
				t--;
			}
			pow = 1 / pow;
		}
		if (n > 0) {
			while (n > 0) {
				pow *= x;
				n--;
			}
		}
		return parseFloat(pow);
	}
};
console.log(myPow(2, 10));
