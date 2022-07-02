// function createStack() {
//     return {
//         items: [],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// stack.items;// => [10]
// console.log(stack.items)
// stack.items = [10, 100, 1000]; // Encapsulation broken!

function createStack() {
    let items = [];
    return {
        push(item) {
            console.log(`inserted ${item}`)
            items.push(item);
            console.log('now the stack is :' + items)
        },
        pop() {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.items)