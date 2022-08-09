class MyGraph {

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vName) {
        if (this.adjacencyList[vName] == null) {
            this.adjacencyList[vName] = new Set();
        }
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1] == null || this.adjacencyList[v2] == null) {
            return false;
        }
        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);
        return true;
    }

    log() {
        for(let v in this.adjacencyList) {
            console.log('Node', v, ':',[...this.adjacencyList[v]]);
        }
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] == null || this.adjacencyList[v2] == null) {
            return false;
        }
        this.adjacencyList[v1].delete(v2);
        this.adjacencyList[v2].delete(v1);
        return true;
    }

    removeVertex(v) {
        if (this.adjacencyList[v] == null) {
            return false;
        }
        let connections = this.adjacencyList[v];
        for(let connection of connections) {
            this.removeEdge(v, connection);
        }

        delete this.adjacencyList[v];
        return true;
    }

    depthFirst(start) {
        let visited = new Set();
        let list = this.adjacencyList;
        let result = [];

        let stack = [start];
        visited.add(start);
        while(stack.length) {
            let vertex = stack.pop();
            result.push(vertex);
            list[vertex].forEach(element => {
                if(!visited.has(element)) {
                    visited.add(element);
                    stack.push(element);
                }
            });
        }
        console.log(result);
        return result;
    }

    depthFirstSearch(start, key) {
        let visited = new Set();
        let list = this.adjacencyList;
        let stack = [start];
        visited.add(start);
        if(start == key) {
            return true;
        }
        let found = false;
        while(stack.length) {
            let vertex = stack.pop();
            list[vertex].forEach(element => {
                if(!visited.has(element)) {
                    visited.add(element);
                    stack.push(element);
                    if(element === key) {
                        found =  true;
                    }
                }
            });
        }
        return found;
    }
}

function findPathExists(n, edges, source, destination) {
    let graph = new MyGraph();
    for(let i=0; i < n; i++) {
        graph.addVertex(i);
    }
    for(let edge of edges) {
        graph.addEdge(edge[0], edge[1]);
    }
    return graph.depthFirstSearch(source, destination);
}
console.log(findPathExists(3, [[0,1],[1,2],[2,0]], 0, 2));
