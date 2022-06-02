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

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
     // new string 
    let str = '';
    let word = '';
    // for each character in the string...
    for (let chr of s) {
        // if it is a space,
        if (chr === ' ') {
            // add it to the new string
            str += word + chr;
            // and reset word.
            word = '';
        } else {
            // otherwise, 
            word = chr + word;
        }
    }
    return str + word;
};