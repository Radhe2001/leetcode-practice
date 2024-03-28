var minimumTotal = function (triangle) {
	let j = 0,
		sum = 0;
	for (let i = 0; i < triangle.length; i++) {
		if (triangle[i][j + 1]) {
			if (triangle[i][j + 1] < triangle[i][j]) sum += triangle[i][j + 1];
			else sum += triangle[i][j];
		} else sum += triangle[i][j];
	}
	return sum;
};
console.log(minimumTotal([[-10]]));
