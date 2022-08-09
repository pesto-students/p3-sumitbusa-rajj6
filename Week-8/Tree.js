class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enQueue(value) {
        this.inStack.push(value);
    }

    deQueue() {
        if (this.outStack.length == 0 && this.inStack.length == 0) throw 'Under flow';
        if (this.outStack.length === 0) {
            while (this.inStack.length != 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    get isEmpty() {
        return this.inStack.length + this.outStack.length == 0;
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    get isEmpty() {
        return this.root == null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty) {
            this.root = newNode;
            return;
        }
        this.#insertAt(newNode, this.root);
    }

    #insertAt(newNode, currentNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this.#insertAt(newNode, currentNode.left);
            }
        } else if (newNode.value > currentNode.value) {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.#insertAt(newNode, currentNode.right);
            }
        } else {
            throw 'Do not enter same value';
        }
    }

    lot() {
        let result = [];
        let queue = new MyQueue();
        if (!this.root) {
            return result;
        }
        queue.enQueue(this.root);
        while (!queue.isEmpty) {
            let currrentNode = queue.deQueue();
            result.push(currrentNode.value);
            if (currrentNode.left) {
                queue.enQueue(currrentNode.left);
            }
            if (currrentNode.right) {
                queue.enQueue(currrentNode.right);
            }
        }
        return result;
    }

    remove(value) {
        if (this.isEmpty) {
            return false;
        }
        let root = this.root;
        if (root.value == value && root.left === null && root.right === null) {
            this.root = null;
        } else {
            this.root = this.#removeAt(value, root);
        }
    }

    #removeAt(value, node) {
        if (value < node.value) {
            if (node.left) {
                node.left = this.#removeAt(value, node.left);
            }
        } else if (value > node.value) {
            if (node.right) {
                node.right = this.#removeAt(value, node.right)
            }
        } else {
            if (node.left == null && node.right == null) {
                // leaf node
                node = null;
            } else if (node.left == null && node.right != null) {
                // have only left child
                node = node.right;
            } else if (node.left != null && node.right == null) {
                // have only right child
                node = node.left;
            } else {
                let newValue = this.#findSmallestInSubTree(node.right);
                node.right = this.#removeAt(newValue, node.right);
                node.value = newValue;
            }
        }
        return node;
    }

    #findSmallestInSubTree(node) {
        if (node.left == null) {
            return node.value;
        } else {
            return this.#findSmallestInSubTree(node.left);
        }
    }

    maxDepth() {
        return this.#maxDepthOf(this.root);
    }

    #maxDepthOf(node) {
        if (node == null) {
            return 0;
        }
        if (node.left == null && node.right == null) {
            return 1;
        }
        return Math.max(this.#maxDepthOf(node.left) + 1, this.#maxDepthOf(node.right) + 1);
    }

    inOrder() {
        let result = [];
        this.#inOrderAt(this.root);
    }
    
    #inOrderAt(node, result) {
        if(node == null) {
            return result;
        } if(node.left == null && node.right == null) {
            return result.push[node.value];
        }
        
    }
}



try {
    let bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(6);
    bst.insert(7);
    bst.insert(3);
    bst.insert(8);
    
    console.log(bst.maxDepth());

    console.log(bst.lot());
    bst.remove(12);
    console.log(bst.lot());
    bst.remove(7);
    console.log(bst.lot());
    bst.remove(5);
    console.log(bst.lot());
   
 
} catch (error) {
    console.warn(error);;
}
