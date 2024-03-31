var singleNonDuplicate = function (nums) {
	let obj = {};
	nums.forEach((element) => {
		if (obj[element]) obj[element]++;
		else obj[element] = 1;
	});
	for (const key in obj) {
		if (obj[key] === 1) return parseInt(key);
	}
};
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
