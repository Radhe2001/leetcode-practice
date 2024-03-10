function isPalindrome(S) {
	let l = S.length;
	let n = Math.floor(l / 2);
	for (let i = 0; i < n; i++) {
		if (S[i] !== S[l - i - 1]) return 0;
	}
	return 1;
}
console.log(isPalindrome('abc'));
