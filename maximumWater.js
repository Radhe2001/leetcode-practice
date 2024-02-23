// TODO:exceeding the time limit need to fix it

const maxHeight = (arr) => {
	let amount = 0;
	let length = arr.length;
	let i = 0;
	while (i < length) {
		for (let j = i + 1; j < length; j++) {
			if (arr[i] < arr[j]) {
				let area = (j - i) * arr[i];
				if (area > amount) {
					amount = area;
				}
			} else {
				let area = (j - i) * arr[j];
				if (area > amount) {
					amount = area;
				}
			}
		}
		i++;
	}
	return amount;
};

console.log(maxHeight([1, 8, 6, 2, 5, 4, 8, 3, 7]));
