var subsets = function (nums) {
	let set = new Set(nums);
	nums = Array.from(set);
	let arr = [],
		i = 0,
		j = i + 1;
	while (i < nums.length) {
		arr.push(nums.slice(i, j));
		if (j === nums.length) {
			i++;
			j = i + 1;
		} else {
			j++;
		}
	}
	return arr;
};
console.log(subsets([1, 2, 3]));
