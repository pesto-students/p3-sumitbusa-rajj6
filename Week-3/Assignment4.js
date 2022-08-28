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
