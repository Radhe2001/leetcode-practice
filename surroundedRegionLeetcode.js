// FIXME:Not working
var solve = function (board) {
	if (board.length <= 2 || board[0].length <= 2) return board;
	let arr = [];
	for (let i = 0; i < board.length; i++)
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 'X') {
				if (
					(i !== 0 && j === 0) ||
					(i !== 0 && j !== board[i].length - 1) ||
					(i !== board.length - 1 && j !== 0) ||
					(i !== board.length - 1 && j !== board[i].length - 1)
				) {
					if (i === 0 && j > 0 && j < board[i].length - 1)
						arr.push([i + 1, j]);
					else if (
						i === board.length - 1 &&
						j > 0 &&
						j < board[i].length - 1
					)
						arr.push([i - 1, j]);
					else if (j === 0 && i > 0 && i < board.length - 1)
						arr.push([i, j + 1]);
					else if (
						j === board[i].length - 1 &&
						i > 0 &&
						i < board.length - 1
					)
						arr.push([i, j - 1]);
					else {
						if (i - 1 && i - 1 > 0) arr.push([i - 1, j]);
						if (i + 1 && i - 1 < board.length - 1)
							arr.push([i + 1, j]);
						if (j - 1 && j - 1 > 0) arr.push([i, j - 1]);
						if (j + 1 && i - 1 < board[i].length - 1)
							arr.push([i, j + 1]);
					}
				}
			}
        }
    console.log(arr);
	// arr.forEach((ele) => (board[ele[0]][ele[1]] = 'X'));
	return board;
};
console.log(
	solve([
		['X', 'X', 'X', 'X'],
		['X', 'O', 'O', 'X'],
		['X', 'X', 'O', 'X'],
		['X', 'O', 'X', 'X'],
	])
);
