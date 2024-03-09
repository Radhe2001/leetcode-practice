var getCommon = function (nums1, nums2) {
	// FIXME:Time limit in exceeding
	// let arr1 = null;
	// let arr2 = null;
	// if (nums1[0] == nums2[0]) {
	// 	return nums1[0];
	// }
	// if (nums1.length > nums2.length) {
	// 	arr1 = nums2;
	// 	arr2 = nums1;
	// } else {
	// 	arr1 = nums1;
	// 	arr2 = nums2;
	// }
	// let common = -1;
	// for (let i = 0; i < arr1.length; i++) {
	// 	let index = arr2.indexOf(arr1[i]);
	// 	if (index !== -1) {
	// 		common = arr1[i];
	// 		break;
	// 	}
	// }
	// return common;
	let i = 0;
	let j = 0;
	let common = -1;
	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] > nums2[j]) {
			j++;
		} else if (nums1[i] < nums2[j]) {
			i++;
		} else {
			common = nums1[i];
			break;
		}
	}
	return common;
};
console.log(getCommon([1, 2, 3, 6], [1,2, 3, 4, 5]));
