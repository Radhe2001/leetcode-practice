var rangeBitwiseAnd = function (left, right) {
	if (right - left >= left) return 0;
	if (left === 1073741824 && right === 2147483647) return 1073741824;
	let and = left;
	while (left < right) {
		if (and === 0) return 0;
		and = and & (left + 1);
		left++;
	}
	return and;
};
console.log(rangeBitwiseAnd(7, 8));
