var mergeAlternately = function (word1, word2) {
	let lessLength = word1.length < word2.length ? word1.length : word2.length;
	let i = 0;
	let str = '';
	while (i < lessLength) {
		str += word1[i];
		str += word2[i];
		i++;
	}
	if (word1.length > word2.length) {
		while (i < word1.length) {
			str += word1[i];
			i++;
		}
	} else {
		while (i < word2.length) {
			str += word2[i];
			i++;
		}
	}
	return str;
};
console.log(mergeAlternately('ab', 'pqrs'));
