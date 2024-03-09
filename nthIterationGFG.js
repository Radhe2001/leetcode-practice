function nthCharacter(s, r, n) {
	let str = '';
	while (r-- > 0) {
		for (let i = 0; i < s.length; i++) {
			s[i] === '1' ? (str += '10') : (str += '01');
			if (i > n) break;
		}
		s = str;
		str = '';
	}
	return s[n];
}
console.log(nthCharacter('1100', 2, 3));
