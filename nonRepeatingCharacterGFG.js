function nonrepeatingCharacter(s) {
	let map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === undefined) {
			map.set(s[i], 1);
		} else {
			map.set(s[i], map.get(s[i]) + 1);
		}
	}
	let arr = [];
	map.forEach((value, key) => {
		if (value === 1) arr.push(key);
	});
	return arr.length > 0 ? arr[0] : -1;
}
console.log(nonrepeatingCharacter('zxvczbtxyzvy'));
