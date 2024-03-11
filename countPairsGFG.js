function countPairs(n, x, mat1, mat2) {
	let count = 0;
	let arr1 = [],
		arr2 = [];
    for (let i = 0; i < mat1.length; i++){
        for (let j = 0; j < mat1[i].length; j++) {
            arr1.push(mat1[i][j])
            arr2.push(mat2[i][j])
        }
    }
	arr1.forEach((element) =>
		arr2.indexOf(x - element) !== -1 ? count++ : null
	);
	return count;
}
console.log(
	countPairs(
		2,
		10,
		[
			[1,2],
			[3,4],
		],
		[
			[4,5],
			[6,7],
		]
	)
);
