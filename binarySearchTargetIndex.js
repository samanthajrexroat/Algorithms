/**Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var search = function (nums, target) {
    // Define starting and ending indexes.
    let start = 0;
    let end = nums.length - 1;
    // Iterate over the array as long as the starting index is less than or equal to the ending.
    while (start <= end) {
        // Defining the middle index.
        const middle = Math.floor( ((start + end) / 2) );
        const current = nums[middle];
        // If the middle is greater than the target index,
        if (current > target) {
            // start searching at the beginning of the array.
            end = middle - 1;
        // If the middle is less than the target index,
        } else if (current < target) {
            // start searching at the second half of the array.
            start = middle + 1
        } else {
            // If neither are true, return the middle index
            return middle;
        }
    }
    // If the target is not found, return -1.
    return -1;
}