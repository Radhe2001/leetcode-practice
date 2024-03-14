var longestPalindrome = function (s) {
	if (s.length < 2) return s;
	let text = '';
	const isPalindrome = (str) => {
		for (let i = 0; i < Math.floor(str.length / 2); i++) {
			if (str[i] !== str[str.length - 1 - i]) return false;
		}
		return true;
	};
	for (let i = 0; i < s.length - 1; i++) {
		for (let j = s.length - 1; j >= i; j--) {
			if (j - i + 1 > text.length) {
				let t = s.slice(i, j + 1);
				isPalindrome(t)
					? (() => {
							if (t.length > text.length) text = t;
					  })()
					: null;
			}
		}
	}
	return text;
};
console.log(longestPalindrome('abbd'));
