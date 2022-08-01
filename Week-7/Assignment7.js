class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enQueue(value) {
        this.inStack.push(value);
    }

    deQuuue() {
        if(this.outStack.length == 0 && this.inStack.length == 0) throw 'Under flow';
        if(this.outStack.length === 0) {
            while(this.inStack.length != 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
}

let q = new MyQueue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQuuue());
console.log(q.deQuuue());
console.log(q.deQuuue());
