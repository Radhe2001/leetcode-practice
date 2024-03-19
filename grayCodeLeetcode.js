var grayCode = function (n) {
	// TODO:Can be optimized more
	// function toGray(n) {
	// 	let num = n.toString(2),
	// 		str = '';
	// 	for (let i = 0; i < num.length; i++) {
	// 		if (i === 0) {
	// 			str += num[i];
	// 			continue;
	// 		}
	// 		if (num[i] === num[i - 1]) str += '0';
	// 		else str += '1';
	// 	}
	// 	return parseInt(str, 2);
	// }
	// let num = Math.pow(2, n);
	// let arr = [];
	// for (let i = 0; i < num; i++) {
	// 	arr.push(toGray(i));
	// }
	// return arr;
	let arr = [0];
	for (let i = 0; i < n; i++) {
		for (let j = arr.length - 1; j >= 0; j--) arr.push(arr[j] | (1 << i));
	}
	return arr;
};
console.log(grayCode(2));
