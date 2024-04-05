var angleClock = function (hour, minutes) {
	let angle = Math.abs(30 * hour - 5.5 * minutes);
	return angle > 180 ? 360 - angle : angle;
};
console.log(angleClock(1, 57));
