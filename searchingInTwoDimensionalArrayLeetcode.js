var searchMatrix = function (matrix, target) {
	for (let i = 0; i < matrix.length; i++) {
		if (target <= matrix[i][matrix[i].length - 1]) {
			let index = matrix[i].indexOf(target);
			return index === -1 ? false : true;
		}
		if (i === matrix.length - 1) return false;
	}
};
console.log(searchMatrix([[1]], 2));
