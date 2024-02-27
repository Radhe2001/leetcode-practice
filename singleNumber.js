var singleNumber = function (nums) {
    for (let i = nums.length; i >= 0; i--){
        if (nums[i] === "a") {
            continue;
        } else {
            let index = nums.indexOf(nums[i])
            if (index === i) {
                return nums[i];
            } else {
                nums[index] = "a";
            }
        }
    }
};
console.log(singleNumber([4, 1, 2, 1, 2]));