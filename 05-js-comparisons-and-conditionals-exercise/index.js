const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW

/**
 * Exercise 1
 *
 * create a variable {targetMatchesCoercedUserValue} which uses
 * coerced equality to compare {target} and {userValue}
 */
let targetMatchesCoercedUserValue = target == userValue;

/**
 * Exercise 2
 *
 * create a variable {targetMatchesUserValue} which uses
 * strict equality to compare {target} and {userValue}
 */
let targetMatchesUserValue = target === userValue;
/**
 * Exercise 3
 *
 * create a variable {passwordMatchesConfirmation} which uses
 * strict equality to compare {password} and {passwordConfirmation}
 */
let passwordMatchesConfirmation = password === passwordConfirmation;
/**
 * Exercise 4
 *
 * create a variable {passwordMessage} should be "Oops, your password and confirmation do not match!"
 * if {password} and {passwordConfirmation} do not match
 */
let passwordMessage = "Oops, your password and confirmation do not match!";
 if (password === passwordConfirmation) {
     let passwordMessage
 }
/**
 * Exercise 5
 *
 * create a variable {fruits} which should be equal to
 * "banana, cherry, watermelon" if {sortOrder} equals to "ALPHABETICAL"
 */
let fruits = "banana, cherry, watermelon";