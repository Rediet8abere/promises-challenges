/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *******************************************************************************
 */

 /*
 *******************************************************************************
 * RESPONSE:
   
 * 1. Step 1 -> Step 3 -> Step 1 -> Async Action completed via callback
 *    Explanation : Even though we are calling the snooze function after logging Step1 
 *                  snooze will be 2 secs delayed allowing Step 3 to be logged. 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *         Step 1
 *         Step 3
 *         Step 2
 *         Async Action completed via callback
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct? 
 *     Same order but this time snooze function was not delayed 
 *     Step 1 -> Step 3 -> Step 1 -> Async Action completed via callback
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

