/*
        Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,
        where k is a given positive integer smaller than or equal to length of the linked list.

        Example 1:
            
            Input:
                N = 5
                value[] = {2, 4, 7, 8, 9}
                k = 3
            Output: 8 9 2 4 7
            
            Explanation:
                Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
                Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
                Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

        Example 2:
            Input:
                N = 8
                value[] = {1, 2, 3, 4, 5, 6, 7, 8}
                k = 4
                Output: 5 6 7 8 1 2 3 4
        
        Expected Time Complexity: O(N). 
        Expected Auxiliary Space: O(1).
        Constraints: 1 <= N <= 103 1 <= k <= N
    
*/

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
        if (index > this.size || index < 0) throw 'bad input!!!';
        
        
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
        if(index < 0 || index >= this.size) throw 'bad input';
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

    rotate(value) {
        while(value > 0) {
            value--;
            let temp = this.shift();
            this.push(temp);
        }
    }
}


try {
    let list = new SinglyLinkedList();
    list.push(6);
    list.push(12);
    list.push(18);
    list.push(24);
    list.log();
    list.rotate(2);
    list.log();
} catch (error) {
    console.warn("", error);
}
