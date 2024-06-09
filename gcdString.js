var gcdOfStrings = function (str1, str2) {
	// TODO: Try another method
	/*
    let match = true;
	let i = 0;
	let str = '';
	while (match) {
		if (str1[i] === str2[i] && str1[i] !== str[0]) {
			str += str1[i];
			i++;
		} else {
			match = false;
		}
	}
	while (str1.length >= str.length || str2.length >= str.length) {
		if (str1.length >= str.length) {
			let index = str1.indexOf(str);
			if (index !== 0) {
				return '';
			}
			str1 = str1.slice(str.length, str1.length);
		}
		if (str2.length >= str.length) {
			let index = str2.indexOf(str);
			if (index !== 0) {
				return '';
			}
			str2 = str2.slice(str.length, str2.length);
		}
	}
	if (str1.length !== 0 || str2.length !== 0) return '';
	return str;
    */

	// FIXED: It worked
	for (let i = str2.length; i >= 1; i--) {
		let str = str2.slice(0, i);
		let index = str1.indexOf(str);
		if (
			index === 0 &&
			str1.length % str.length === 0 &&
			str2.length % str.length === 0
		) {
			let temp1 = str1,
				temp2 = str2;
			while (temp1.indexOf(str) !== -1 && temp1.length > 0) {
				temp1 = temp1.replace(str, '');
			}
			while (temp2.indexOf(str) !== -1 && temp2.length > 0) {
				temp2 = temp2.replace(str, '');
			}
			if (temp1 === '' && temp2 === '') return str;
		}
	}
	return '';
};

console.log(gcdOfStrings('ABCABC', 'ABC'));
