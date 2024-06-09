var findDifference = function (nums1, nums2) {
	let arr = [[], []];
	let set = new Set(nums1);
	nums1 = Array.from(set);
	set = new Set(nums2);
	nums2 = Array.from(set);

	for (let i = 0; i < nums1.length; i++)
		if (nums2.indexOf(nums1[i]) === -1) arr[0].push(nums1[i]);
	for (let i = 0; i < nums2.length; i++)
		if (nums1.indexOf(nums2[i]) === -1) arr[1].push(nums2[i]);

	return arr;
};
console.log(findDifference([1, 2, 3], [2, 4, 6]));
