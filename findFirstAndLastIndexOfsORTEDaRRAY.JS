var searchRange = function (nums, target) {
	let index = nums.indexOf(target);
    if (index === -1) return [-1, -1];
    console.log(index);
	let i = index;
	while (nums[i] === target) i++;
	return [index, i - 1];
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
