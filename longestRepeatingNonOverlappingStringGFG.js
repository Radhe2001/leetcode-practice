//  FIXME: Time complexity issue need to be fixed
function longestSubstring(s, n) {
	let result = '';
	let i = 0;
	while (i < n) {
		let j = i + 1;
		while (j < n) {
			let str1 = s.slice(i, j);
			let str2 = s.slice(j, s.length);
			let index = str2.indexOf(str1);
			if (index !== -1 && result.length < str1.length) result = str1;
			j++;
		}
		i++;
	}
	if (result.length < 1) return -1;
	return result;
}

console.log(longestSubstring('heheheh', 7));
