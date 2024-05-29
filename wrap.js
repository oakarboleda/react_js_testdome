/**
 * Write a "wrap" function that takes the "execute" function as an argument
 * and returns a modified function so that the following requirements are met:
 * - Any result returned by the function execute should be returned from the modified function unchanged
 * - If the function execute throws an error, the modified function should return "null"
 * - After the function execute has thrown an error, its future executions
 * should be prevented and "null" should e returned
 * - Multiple wrapped functions can coexist
 *
 * The "execute" function doesn't take any arguments.
 * Duration: 30mins
 */

/**
 * Solution:
 * @param execute
 * @returns {Function}
 */
function wrap (execute) {
    // Return modified function
    let prevErr = false;
    return function () {
        if (prevErr)
            return;
        try {
            execute();
        } catch (e) {
            prevErr = true;
            return null;
        }
        return execute();
    }

}

// Testing
var errorExec = wrap(function () {
    throw new Error('Error');
});
var resultExec = wrap(function () {
    return "Result";
});
console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"
console.log(errorExec && errorExec() && resultExec()); // Should output "null"