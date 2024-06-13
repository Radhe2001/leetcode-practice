var uniqueOccurrences = function (arr) {
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i]] === undefined) obj[arr[i]] = 1;
		else obj[arr[i]]++;
	}
	arr = [];
	for (const key in obj) arr.push(obj[key]);
	let arr1 = arr.slice(0, arr.length);
	let set = new Set(arr1);
	set = Array.from(set);
	return set.length === arr.length ? true : false;
};
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
