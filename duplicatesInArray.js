const duplicates = (a, n) => {
	let arr = [];
	for (let i = a.length - 1; i >= 0; i--) {
		let index = a.indexOf(a[i]);
		if (index !== i) {
			if (arr.indexOf(a[i]) === -1) {
				arr.push(a[i]);
			}
		}
	}
	if (arr.length === 0) {
		arr.push(-1);
    }
    let arr2 = [];
    for (let i = arr.length-1; i >=0; i--){
        arr2.push(arr[i])
    }
    console.log(arr2)
};

duplicates([0, 3, 1, 2], 4);
