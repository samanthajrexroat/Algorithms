//array methods solution
function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  
// O(1) runtime solution using while loop.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
};