// Complete leetcode question day3
var longestCommonPrefix = function (strs) {
	let str = '';
	for (let i = 0; i < strs[0].length; i++) {
		let mismatch = false;
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== strs[0][i]) {
				mismatch = true;
				break;
			}
		}
		if (mismatch) {
			break;
		} else {
			str += strs[0][i];
		}
	}
	return str;
};
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
