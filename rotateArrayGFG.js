//  TODO: Needs to rotate an array on the axis of D
function rotateArr(arr, d, n) {
	// if (n === d) return arr;
	// let axis = n - d;
	// for (let i = 0; i < d; i++) {
	// 	let data = arr[axis];
	// 	arr[axis] = arr[i];
	// 	arr[i] = data;
	// 	axis++;
	// }
	// return arr;


	arr = arr.slice(d,n).concat(arr.slice(0, d));
	return arr;
}

console.log(rotateArr([1,2,3,4,5], 2, 5));
