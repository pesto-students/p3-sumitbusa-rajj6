class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = 10;
    }

    get isEmpty() {
        return this.size === 0;
    }

    getNode(index) {
        if (!Number.isInteger(index)) {
            throw 'Not a number';
        }
        if (index >= this.size) {
            throw 'index too large';
        }
        if (index < 0) {
            throw 'index is negative';
        }

        let counter = 0;
        let currrentNode = this.head;
        while (counter < index) {
            currrentNode = currrentNode.next;
            counter++;
        }
        return currrentNode;
    }

    setNode(index, value) {
        let node = this.getNode(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    push(value) {
        if (this.size === this.maxSize) throw 'Over flow';

        let node = new Node(value);

        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    log() {
        if (this.isEmpty) {
            console.log('--- Empty ---');
            return;
        }

        let aux = [];
        let currrentNode = this.head;
        aux.push(currrentNode.value);
        while (currrentNode.next) {
            let nextNode = currrentNode.next;
            aux.push(nextNode.value);
            currrentNode = nextNode;
        }

        console.log(aux.join(' -> '));
        return;
    }

    pop() {
        if (this.isEmpty) throw 'under flow';
        let node;
        if (this.size === 1) {
            node = this.head;
            this.head = null;
            this.tail = null;

        } else {
            let currrentNode = this.head;
            let prev = null;
            while (currrentNode.next) {
                prev = currrentNode;
                currrentNode = currrentNode.next;
            }
            node = currrentNode;
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return node.value;
    }

    unshift(value) {
        if (this.size === this.maxSize) throw 'Overflow';
        let newNode = new Node(value);
        if (this.isEmpty) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    shift() {
        if (this.isEmpty) throw 'Underflow';
        let node = this.head;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
        return node.value;
    }

    insert(index, value) {
        if (this.size === this.maxSize) throw 'Overflow';
        if (index > this.size || index < 0) throw 'Bhai Aukat me!!!';
        
        
        if (index == 0) {
            this.unshift(value);
            return;
        }
        if (index === this.size) {
            this.push(value);
        }
        let prev = this.getNode(index-1);
        let newNode = new Node(value);
        let nextNode = prev.next;
        newNode.next = nextNode;
        prev.next = newNode;
        this.size++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.size) throw 'Bhai Aukat me';
        if(index === this.size-1) {
            return this.pop();
        }
        if(index === 0) {
            return this.shift();
        }
        let prev = this.getNode(index-1);
        let temp = prev.next;
        prev.next = prev.next.next;
        this.size--;
        return temp.value;
    }

    reverse() {
        if(this.isEmpty) return;
        if(this.size === 1) return;
        let currrentNode = this.head;
        let prevNode = null;
        while(currrentNode.next) {
            let nextNode = currrentNode.next;
            currrentNode.next = prevNode;
            prevNode = currrentNode;
            currrentNode = nextNode;
        }
        currrentNode.next = prevNode;
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;
    }
}

class Stack {
    constructor() {
        this.list = new SinglyLinkedList();
    }

    push(value) {
        this.list.unshift(value);
    }

    pop() {
        return this.list.shift();
    }
}

function ParenthesisChecker(expression) {
    let stack = new Stack();
    let flag = true;
    [...expression].forEach(char => {
        if(char === '{' || char === '(' || char === '[') {
            stack.push(char);
        } else {
            if(char === '}') {
                let lastEle = stack.pop();
                if(lastEle !== '{') {
                    flag = false;
                    return flag;
                }
            }
            if(char === ')') {
                let lastEle = stack.pop();
                if(lastEle !== '(') {
                    flag = false;
                    return flag;
                }
            }
            if(char === ']') {
                let lastEle = stack.pop();
                if(lastEle !== '[') {
                    flag = false;
                    return flag;
                }
            }
        }
    });
    console.log(flag);
    return flag;
}

let expression1 = '[()]{}{()()}';
let expression2 = '[(])';
ParenthesisChecker(expression1);
ParenthesisChecker(expression2);
