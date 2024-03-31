var findMaxForm = function (strs, m, n) {
	let arr = strs.filter((element) => {
		let zero = 0,
			one = 0;
		for (let i = 0; i < element.length; i++) {
			if (element[i] === '0') zero++;
			else one++;
		}
		if (zero <= m && one <= n) return element;
	});
	return arr.length;
};
console.log(findMaxForm(['10', '0', '1'], 1, 1));
