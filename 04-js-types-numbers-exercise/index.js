/**
 * Exercise 1
 *
 * create a function "isOdd" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Not odd" if it's
 * anything else
 */
function isOdd(a){
    if (a % 2 !== 0)
        return "Is odd";
    else  
        return "Not odd";
}
console.log(isOdd(5));
/**
 * Exercise 2
 *
 * create a function "isEven" which takes a number as a parameter
 * and return a string "Is even" if it's even or "Not even" if it's
 * anything else
 */
 function isEven(a){
    if (a % 2 == 0)
        return "Is even";
    else
        return "Not even";
}
console.log(isEven(6));
/**
 * Exercise 3
 *
 * create a function "oddOrEven" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Is even" if it's even
 */
function oddOrEven(b){
    if (b % 2 !== 0)
        return "Is odd";
    else if (b % 2 == 0);
        return "Is even";
}
console.log(oddOrEven(5));
/**
 * Exercise 4
 *
 * create function "roundedNumber" which takes a fraction as a parameter
 * and return rounded integer
 */
function roundedNumber(x){ 
    return Math.round(x);  
}
console.log(roundedNumber(5.6));

/**
 * Exercise 5
 *
 * create function "roundToLowerInteger" which takes a fraction as a parameter
 * and returns the largest integer less than or equal to a given number
 */
function roundToLowerInteger(y){
    return Math.floor(y)
}
console.log(roundToLowerInteger(5.9));

/**
 * Exercise 6
 *
 * create function "roundToLargerInteger" which takes a fraction as a parameter
 * and returns rounded number up to the next largest integer
 */
function roundToLargerInteger(y){
    return Math.ceil(y)
}
console.log(roundToLargerInteger(5.9));

/**
 * Exercise 7
 *
 * create function "convertToPositive" which takes a negative number as a parameter
 * and returns same number but positive
 */
function convertToPositive(number){
    return (-number);
}
/**
 * Exercise 8
 *
 * create function "findMaxNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the maximum number
 */
function findMaxNumber(a, b, c, d){
    return Math.max(a, b, c, d);
}
console.log(findMaxNumber(2, 6, 1, 8));

/**
 * Exercise 9
 *
 * create function "findMinNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the minimum number
 */
function findMinNumber(e, f, g, h){
    return Math.min(e, f, g, h);
}
console.log(findMinNumber(2, 6, 1, 8));