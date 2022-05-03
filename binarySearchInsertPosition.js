/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
     // Adding a new function so we can insert our values recursively in our return
    function search(start, end) {
        //If the starting position is larger than the ending (i.e. not in order), return the start.
        if (start > end) return start;
        //Find the midpoint
        const mid = Math.floor((start + end) / 2);
        // If the middlepoint is the target, return it.
        if (nums[mid] === target) return mid;
        // If the target is larger than the midpoint, run the search function on the second half.
        if (nums[mid] < target) return search(mid + 1, end);
        // If the target is smaller than the midpoint, search the first half.
        if (nums[mid] > target) return search(start, mid -1);
    }
    
    return search(0, nums.length -1);
};