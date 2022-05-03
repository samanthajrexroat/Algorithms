/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // Define starting and ending versions
        let start = 1, 
        end = n;
        // As long as the starting version is less than the ending version...
        while (start <= end) {
            // Define the middle version
            const mid = Math.floor((start + end) / 2);
            // If the middle point API returns true (bad version), disregard the second half...
            if (isBadVersion(mid)) {
                end = mid - 1;
            } else {
                // otherwise, disregard the first half.
                start = mid + 1;
            }
        }
        // Return the first value that is 'bad'
        return start;
    };
};