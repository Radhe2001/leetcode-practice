// FIXME: More Optimization is required

const recamanSequence = (n) => {
	const arr = [];
	for (let i = 0; i < n; i++) {
		if (i === 0) {
			arr.push(0);
		} else {
			let element = arr[i - 1] - i;
			if (!((element > 0) && (arr.indexOf(element) === -1))) {
				element = arr[i - 1] + i;
			}
            arr.push(element);
		}
    }
    return arr;
};
console.log(recamanSequence(5));
