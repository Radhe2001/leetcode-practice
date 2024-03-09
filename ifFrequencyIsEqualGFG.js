function sameFreq(s) {
	let obj = {};
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]] === undefined) {
			obj[s[i]] = 1;
		} else {
			obj[s[i]]++;
		}
	}
	let count1 = 0;
	let count2 = 0;
	let arr = Object.values(obj);
	let max = Math.max(...arr);
	console.log(arr, max);
	for (let i = 0; i < arr.length; i++) {
		const ele = arr[i];
		if (max - ele > 1) {
			return false;
		}
		if (max - ele === 0) count1++;

		if (max - ele === 1) count2++;
	}
	return (count1 === arr.length - 1 && count2 === 1) ||
		(count2 === arr.length - 1 && count1 === 1)
		? false
		: true;
}
console.log(sameFreq('xyyz'));
