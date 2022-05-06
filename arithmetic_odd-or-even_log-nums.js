// Fill in the body of each function with the code required

var add = function(num1, num2) {
    return num1 + num2
};

var subtract = function(num1, num2) {
    return num1 - num2
};

var multiply = function(num1, num2) {
    return num1 * num2
};

var divide = function(num1, num2) {
    return num1 / num2
};


// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
};


// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    for ( var i = 1; i <= num; i++ ){
        console.log(i)
    }
};