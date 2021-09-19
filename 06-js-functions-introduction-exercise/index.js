/**
 * Exercise 1
 *
 * create a global variable "myFavoriteAnimal" and
 * assign your favorite animal
 */
const myFavoriteAnimal = "Pinguin";
/**
 * Exercise 2
 *
 * create a function "myAnimalWithLog", which will have
 * console.log with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 */
function myAnimalWithLog() {
    message = "My favorite animal is " + myFavoriteAnimal;
    console.log(message)
}
/**
 * Exercise 3
 *
 * create a function "myAnimalWithWarn", which will have
 * console.warn with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */
function myAnimalWithWarn() {
    message = "My favorite animal is " + myFavoriteAnimal;
    console.warn(message)
}
/**
 * Exercise 4
 *
 * create a function "myAnimalWithError", which will have
 * console.error with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */
function myAnimalWithError() {
    message = "My favorite animal is " + myFavoriteAnimal;
    console.error(message)
}
/**
 * Exercise 5
 * create a function "myCity", which will have
 * alert(read about it) with the message "My favorite city is YOUR_CITY"
 *
 */
function myCity() {
    message = "My favorite city is London";
    alert(message)
}