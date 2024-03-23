var countPrimes = function (n) {
	let arr = new Array(n).fill(true);
	arr[0] = false;
	arr[1] = false;
	for (let i = 2; i * i < n; i++) {
		if (!arr[i]) continue;
		for (let j = i * i; j < n; j += i) arr[j] = false;
	}
	let count = 0;
	for (let i = 0; i < arr.length; i++) if (arr[i]) count++;
	return count;
};
console.log(countPrimes(1));
