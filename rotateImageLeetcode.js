// Congo it worked
var rotate = function (matrix) {
	let x = 0,
		t = matrix[0].length;
	let n = t,
		len = t;
	for (let i = 0; i <= n / 2; i++) {
		for (let j = x; j < t - 1; j++) {
			let temp = matrix[j][len - 1 - i];
			matrix[j][len - 1 - i] = matrix[i][j];
			let c = matrix[len - 1 - i][len - 1 - j];
			matrix[len - 1 - i][len - 1 - j] = temp;
			temp = c;
			c = matrix[len - 1 - j][i];
			matrix[len - 1 - j][i] = temp;
			temp = c;
			matrix[i][j] = temp;
		}
		x++;
		t--;
	}
	return matrix
};
console.log(
	rotate([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
