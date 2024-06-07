var replaceWords = function (dictionary, sentence) {
	// TODO: It works but can it be optimized more !!!

	let words = sentence.split(' ');
	dictionary.forEach((e) => {
		words.forEach((element, index) => {
			if (element.indexOf(e) === 0) words[index] = e;
		});
	});

	let word = '';
	for (let i = 0; i < words.length; i++) {
		if (i === 0) word += words[i];
		else word += ' ' + words[i];
    }
    
    return word;
};

console.log(
	replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')
);
