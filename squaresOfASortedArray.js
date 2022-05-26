/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortedSquares = function(nums) {
     // create a new array to add squared nums.
    let result = [];
    // defining endpoints of nums array.
    let left = 0;
    let right = nums.length - 1;
    // keeping track of our pointer.
    let pointer = right;
    
    // 
    while (left <= right ) {
        // If the square of the num at [0] is greater than
        // the square of the num at the right,
        if (nums[left] ** 2 > nums[right] ** 2) {
            // the result array will move the pointer left
            // and square the next index to the right.
            result[pointer--] = nums[left++] ** 2;
        } else {
            // otherwise, if the square of left is less than
            // the square of right,
            // the result array will move the pointer and 
            // the right index left and square that index.
            result[pointer--] = nums[right--] ** 2;
        }
    }
    
    return result;
};