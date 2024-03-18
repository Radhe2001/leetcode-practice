var findMinArrowShots = function (points) {
	points.sort((a, b) => a[0] - b[0]);
	let ar = 1,
		end = points[0][1];
	for (let i = 1; i < points.length; i++) {
		if (points[i][0] > end) {
			ar++;
			end = points[i][1];
		} else {
			end = points[i][1] > end ? end : points[i][1];
		}
	}
	return ar;
};
console.log(
	findMinArrowShots([
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
	])
);
