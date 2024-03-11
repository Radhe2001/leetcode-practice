function removeDuplicates(str) {
	let set = new Set();
	for (let i = 0; i < str.length; i++) {
		set.add(str[i]);
	}
	let s = '';
	for (let i = 0; i < str.length; i++) {
		let av = set.has(str[i]);
		if (av) {
			s += str[i];
			set.delete(str[i]);
		}
	}
	return s;
}
console.log(removeDuplicates('geEksforGEeks'));
