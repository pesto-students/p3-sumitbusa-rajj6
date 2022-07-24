function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

// here log will print Count is0

// Code is incrementing the count every time increment() called
// the is not reflecting because the message is computed only once when createIncrement();
//  and log() is printing the same message every time