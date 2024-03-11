var isMatch = function (s, p) {
	// FIXME: Need to be fixed
    if ((p.indexOf('.') === -1 || p.indexOf('*') === -1) && p.length < s.length)
		return false;
	for (let i = 0; i < p.length; i++) {
		if (p[i] === '.') {
			continue;
		} else if (p[i] === '*') {
			return true;
		} else {
			if (p[i] === s[i]) {
				continue;
			} else {
				return false;
			}
		}
	}
	return true;
};
console.log(isMatch('aab', 'c*a*b'));
