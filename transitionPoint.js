const transitionPoint = (arr, n) => {
	let index = arr.indexOf(1);
	if (index === -1 || 0) {
		return -1;
	} else {
		return index;
	}
};
console.log(transitionPoint([0, 0, 0, 0], 4));
