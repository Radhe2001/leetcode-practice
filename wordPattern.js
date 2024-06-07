var wordPattern = function (pattern, s) {
	pattern = pattern.split('');
	s = s.split(' ');

    if (s.length !== pattern.length) return false;
    
	let obj = {};

	pattern.forEach((element, index) => {
		if (obj[element] === undefined) obj[element] = s[index];
	});

	let temp = Object.values(obj);
	let set = new Set(temp);
	if (Array.from(set).length !== temp.length) return false;

	for (let i = 0; i < pattern.length; i++)
		if (obj[pattern[i]] !== s[i]) return false;
	return true;
};
console.log(wordPattern('abba', 'dog dog dog dog'));
