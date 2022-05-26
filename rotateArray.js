/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // avoid multiple rotations.
    k %= nums.length
    // 
    let reverse = function (index, pointer) {
        while( index < pointer ) {
            // holder allows switching of pointer and index.
            let holder = nums[index]
            nums[index] = nums[pointer]
            nums[pointer] = holder
            //move search points.
            index++
            pointer--
        }
    }

    // reverse the entire array.
    reverse(0, nums.length-1);
    // (un)reverse the beginning of the array - to k point.
    reverse(0, k-1)
    // (un)reverse the end of the array - from k point.
    reverse(k, nums.length-1)
};