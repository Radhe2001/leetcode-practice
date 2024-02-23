//  TODO:Needs to be done as it is incomplete

const substring = (str) => {
	let counter = 1;
	for (let i = 0; i < str.length; i++) {
		let temp = i + 1;
		for (let j = i + 1; j < str.length; j++) {
			temp = j;
			if (str[i] === str[j]) {
				break;
			}
		}
		temp = temp - i;
		if (counter < temp) {
			counter = temp;
		}
	}
	return counter;
};

console.log(substring('pwwkew'));
