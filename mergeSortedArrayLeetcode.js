var merge = function (nums1, m, nums2, n) {
	let i = m;
	let j = 0;
	while (i < m + n) {
		nums1[i++] = nums2[j++];
	}
	return nums1.sort((a, b) => a - b);
};
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 3], 3));
