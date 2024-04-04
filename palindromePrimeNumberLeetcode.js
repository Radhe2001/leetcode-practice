var primePalindrome = function (n) {
	const isPalindrome = (n) => {
		n = n.toString();
		for (let i = 0; i < Math.floor(n.length / 2); i++)
			if (n[i] !== n[n.length - 1 - i]) return false;
		return true;
	};
	const isPrime = (n) => {
		if (n < 2) return false;
		if (n === 2 || n === 3) return true;
		if (n % 2 === 0 || n % 3 === 0) return false;
		for (let i = 5; i * i <= n; i += 6)
			if (n % i === 0 || n % (i + 2) === 0) return false;
		return true;
	};
	let i = n;
	while (true) {
		if (isPalindrome(i)) if (isPrime(i)) return i;
		i++;
	}
};
console.log(primePalindrome(13));
