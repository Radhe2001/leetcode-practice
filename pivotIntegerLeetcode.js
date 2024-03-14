var pivotInteger = function (n) {
	let total = (n * (n + 1)) / 2;
	let i = 1;
	let pivot = true;
	while (i < n) {
		let sum = (i * (i + 1)) / 2;
		if (sum === total - sum + i) {
			break;
		}
		i++;
		if (i === n) pivot = false;
	}
	return pivot ? i : -1;
};
console.log(pivotInteger(4));
