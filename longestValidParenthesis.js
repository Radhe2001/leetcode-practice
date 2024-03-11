var longestValidParentheses = function (s) {
	let arr = [],
		count = 0,
		prev = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			if (arr[arr.length - 1] === '(') {
				prev = prev < count ? count : prev;
				count = 0;
			}
			arr.push(s[i]);
		} else {
			if (s[i] === ')') {
				if (arr[arr.length - 1] === '(') {
					arr.pop();
					count += 2;
				}
			}
		}
	}
	return prev < count ? count : prev;
};
console.log(longestValidParentheses(''));


