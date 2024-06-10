var heightChecker = function (heights) {
	let arr = heights.slice(0, heights.length);
	heights.sort((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < heights.length; i++) if (heights[i] !== arr[i]) count++;
	return count;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
