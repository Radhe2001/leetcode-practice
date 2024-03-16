var letterCombinations = function (digits) {
	function get(str) {
		switch (str) {
			case '2':
				return 'abc';
			case '3':
				return 'def';
			case '4':
				return 'ghi';
			case '5':
				return 'jkl';
			case '6':
				return 'mno';
			case '7':
				return 'pqrs';
			case '8':
				return 'tuv';
			case '9':
				return 'wxyz';
			default:
				return '';
		}
	}
	let str1 = get(digits[0]),
		str2 = get(digits[1]),
		str3 = get(digits[2]),
		str4 = get(digits[3]),
		str5 = get(digits[4]),
		arr = [];
	for (let i = 0; i < str1.length; i++) {
		for (let j = 0; j < str2.length; j++) {
			for (let k = 0; k < str3.length; k++) {
				for (let l = 0; l < str4.length; l++) {
					for (let m = 0; m < str5.length; m++) {
						arr.push(
							str1[i] + str2[j] + str3[k] + str4[l] + str5[m]
						);
					}
					if (digits.length === 4)
						arr.push(str1[i] + str2[j] + str3[k] + str4[l]);
				}
				if (digits.length === 3) arr.push(str1[i] + str2[j] + str3[k]);
			}
			if (digits.length === 2) arr.push(str1[i] + str2[j]);
		}
		if (digits.length === 1) arr.push(str1[i]);
    }
    return arr;
};
console.log(letterCombinations('2'));
