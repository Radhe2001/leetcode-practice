// TODO:Missing number in array ==>> GeeksForGeeks

const missingNumber = (array, n) => {
	for (let i = 1; i <= n; i++) {
		let index = array.indexOf(i);
		if (index == -1) {
			console.log(i);
		}
	}
};

missingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5], 10);
