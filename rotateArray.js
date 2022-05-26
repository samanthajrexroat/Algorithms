/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // avoid multiple rotations.
    k %= nums.length
    
    let reverse = function (index, pointer) {
        while( index < pointer ) {
            let holder = nums[index]
            nums[index] = nums[pointer]
            nums[pointer] = holder
            index++
            pointer--
        }
    }
    reverse(0, nums.length-1);
    reverse(0, k-1)
    reverse(k, nums.length-1)
};