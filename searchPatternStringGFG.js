function search(pattern, txt) {
	let arr = [];
	while (txt.length > 0 && txt.indexOf(pattern) !== -1) {
		let index = txt.indexOf(pattern) + 1;
		index += arr.length * pattern.length;
		arr.push(index);
		txt = txt.replace(pattern, '');
		console.log(arr);
	}
}
console.log(search('birth', 'birthdayboy'));
