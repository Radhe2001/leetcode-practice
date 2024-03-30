var frequencySort = function (s) {
	let obj = {};
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]]) obj[s[i]]++;
		else obj[s[i]] = 1;
	}
	let arr = [];
	for (const key in obj) arr.push([key, obj[key]]);
	arr.sort((a, b) => a[1] - b[1]);
	s = '';
	for (let i = arr.length - 1; i >= 0; i--) {
		while (arr[i][1]-- > 0) s += arr[i][0];
    }
    return s;
};
console.log(frequencySort('Aabb'));
