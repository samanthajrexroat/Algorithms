/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // moving from ending to beginning,
    for(let i = nums.length-1; i>=0 ; i--) {
        // if the index equals zero,
        if (nums[i] === 0) {
            // push a zero to the end of the array
            nums.push(0);
            // and splice/delete that index
            nums.splice(i, 1);
        }
    }
    return nums;
};