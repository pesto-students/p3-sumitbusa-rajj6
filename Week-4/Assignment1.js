/*
Implement a function named `getNumber` which generatesa random number. If randomNumberis divisible by 5 it will
reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a 
variable.
    1.  JS promises should not be used.
    2.  A custom promise function should be created.
    3.  This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
    4.  Should be able to accept callbacks as props.

Guidelines:
    1.  JS promises should not be used.
    2.  3rd party libraries should not be used.
    3.  Custom Function should carry a meaningful name.
    4.  The program should execute without errors.
    5.  The program should achieve the desired result.
    6.  The program should take care of all 3 states of a Promise.
    7.  Should be committed to Git with meaningful commit messages.

Outcome:
    1.  Under the hood understanding of how a promise actually works.
    2.  Using “bind” to bind the callback functions sent as props.
    3.  Understanding what a polyfill is.
    4.  Error handling using functions.
*/

function getNumber() {
    return Math.ceil(Math.random() * 100);
}

getNumberAfter = (ms) => new Promise((resolve, reject) => {
    let randomNumber = getNumber();
    if (randomNumber % 5 !== 0) {
        return setTimeout(() => { resolve(randomNumber) }, ms);

    } else {
        return setTimeout(() => { reject(new Error('Num is divisible by 5')) }, ms);
    }
});

getNumberAfter(10)
    .then((number) => console.log(`Resolved : ${number}`))
    .catch((error) => console.log(`Rejected ${error}`))
    .finally(() => console.log('Finally'))
