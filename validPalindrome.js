var isPalindrome = function (s) {
	s = s.toLowerCase();
	let str = '';

	for (let i = 0; i < s.length; i++)
		if (
			(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
			(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
		)
            str += s[i];
    
	for (let i = 0; i < Math.floor(s.length / 2); i++)
		if (str[i] !== str[str.length - 1 - i]) return false;

	return true;
};

console.log(isPalindrome('0P'));
