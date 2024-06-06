const findsubset = (arr) => {
	let sub = [[]];
	for (let i = 0; i < arr.length; i++) {
		let count = sub.length;
		for (let j = 0; j < count; j++) {
			let temp = sub[j].slice(0, sub[j].length);
			temp.push(arr[i]);
			sub.push(temp);
		}
	}
	sub = sub.filter((ele) => {
		if (ele.length > 0) {
			return ele;
		}
	});
	let newArr = [];
	sub.forEach((ele) => {
		let temp = 0;
		for (let i = 0; i < ele.length; i++) {
			temp = temp | ele[i];
		}
		newArr.push(temp);
	});
    set = new Set(newArr);
    a = Array.from(set)
	console.log(a);
};
findsubset([1,2,3,4]);
