var relativeSortArray = function (arr1, arr2) {
	let obj = {};
	for (let i = 0; i < arr1.length; i++) {
		if (obj[arr1[i]] === undefined) obj[arr1[i]] = 1;
		else obj[arr1[i]]++;
	}
	let arr = [];
	for (let i = 0; i < arr2.length; i++) {
		for (let j = 0; j < obj[arr2[i]]; j++) arr.push(arr2[i]);
		obj[arr2[i]] = undefined;
	}
	let temp = [];
	for (const key in obj)
		if (obj[key] !== undefined)
			for (let i = 0; i < obj[key]; i++) temp.push(parseInt(key));

    temp.sort((a, b) => a - b);
    arr = arr.concat(temp)
    return arr;
};
console.log(
	relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
