var removeDuplicates = function (s, k) {
	let obj = {},
		str = '';
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]]) obj[s[i]]++;
		else obj[s[i]] = 1;
	}
	for (let i = 0; i < s.length; i++) {
		obj[s[i]] = obj[s[i]] % k;
		if (obj[s[i]] <= 0) continue;
		str += s[i];
		obj[s[i]]--;
	}
	return str;
};
console.log(removeDuplicates('yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4));
