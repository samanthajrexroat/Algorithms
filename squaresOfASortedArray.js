/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortedSquares = function(nums) {
     // create a new array to add squared nums.
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    let pointer = right;
    
    while (left <= right ) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[pointer--] = nums[left++] ** 2;
        } else {
            result[pointer--] = nums[right--] ** 2;
        }
    }
    
    return result;
};