var intersection = function (nums1, nums2) {
	let arr = [];
    if (nums1.length < nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
			let index = nums2.indexOf(nums1[i]);
			if (index !== -1) {
				arr.push(nums1[i]);
			}
		}
    } else {
        for (let i = 0; i < nums2.length; i++) {
			let index = nums1.indexOf(nums2[i]);
			if (index !== -1) {
				arr.push(nums2[i]);
			}
		}
    }   
	return arr;
};
console.log(intersection([1, 2, 2, 1], [2]));
