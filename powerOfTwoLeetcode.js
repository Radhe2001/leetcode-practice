var isPowerOfTwo = function (n) {
	if (n == 0) return false;
	return (n | (n - 1)) === 2 * n - 1 ? true : false;
};
console.log(isPowerOfTwo(14));
