
/**
 * Implement a function to calculate the factorial of a number using recursion.
Ensure it handles edge cases: negative numbers or non-integer inputs.
 */

// Error: It must be a callback fuction
function factorial(n){
    if (n === 0 || n === 1){
       return 1;

    } else if (n > 1) {
            return n * factorial(n-1);
    } else {
            console.error("error")
            return ("Número no válido")
        }
    };

    module.exports = {factorial}
   //console.log(factorial(5));