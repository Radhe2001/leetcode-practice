var mySqrt = function (x) {
	// if (x === 1) return 1;
	// let i = 1;
	// while (i * i <= x) {
	// 	if (i * i * 4 < x) {
	// 		i *= 2;
	// 		continue;
	// 	}
	// 	i += 1;
	// }
	// return i - 1;

	if (x === 1) return 1;
	let head = 0,
		tail = x;
	while (true) {
		let mid = Math.floor((head + tail) / 2);
		if (mid * mid < x) {
			if ((mid + 1) * (mid + 1) > x) return mid;
			head = mid;
		} else if (mid * mid === x) {
			return mid;
		} else {
			if ((mid - 1) * (mid - 1) < x) return mid - 1;
			tail = mid;
		}
	}
};

console.log(mySqrt(2));
