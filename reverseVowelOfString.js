var reverseVowels = function (s) {
	let vow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
		i = 0,
		j = s.length - 1;
	let arr = s.split('');
	while (i < j) {
		while (vow.indexOf(arr[i]) === -1) {
			if (i > arr.length) break;
			i++;
		}
		while (vow.indexOf(arr[j]) === -1) {
			if (j < 0) break;
			j--;
		}

		if (i < j) {
			let c = arr[i];
			arr[i] = arr[j];
			arr[j] = c;
			i++;
			j--;
		}
	}
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += arr[i];
	}
	return str;
};
console.log(reverseVowels('leetcode'));
