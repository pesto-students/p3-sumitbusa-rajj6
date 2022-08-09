class MyDirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if(this.adjacencyList[v] == null) {
            this.adjacencyList[v] = new Set();
            return true;
        }
        return false;
    }

    addDirectedEdge(v1, v2) {
        if(this.adjacencyList[v1] == null || this.adjacencyList[v2] == null) {
            return false;
        }
        this.adjacencyList[v1].add(v2);
        return true;
    }

    log() {
        for(let v in this.adjacencyList) {
            console.log('Node', v, ':',[...this.adjacencyList[v]]);
        }
    }
     
    depthFirstSearch(start, key) {
        let visited = new Set();
        let list = this.adjacencyList;
        let stack = [start];
        visited.add(start);
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

function findTownJudge(n, trust) {
    let twon = new MyDirectedGraph();
    for(let i = 1;  i <= n; i++ ) {
        twon.addVertex(i);
    }

    for(let t of trust) {
        twon.addDirectedEdge(t[0], t[1]);
    }
    let personHowDoNotTrustAnyOne = [];
    let otherPerson = [];
    for(let v in twon.adjacencyList) {       
        if(twon.adjacencyList[v].size == 0) {
            personHowDoNotTrustAnyOne.push(v);
        } else {
            otherPerson.push(v);
        }
    }
    let jugde = -1;
    for(let person of personHowDoNotTrustAnyOne) {
        let trusted = true;
        if(otherPerson.length == 0) {
            jugde = person;
            break;
        } else {
            for(let person2 of otherPerson) {
                if(twon.depthFirstSearch(person2,person)) {
                    trusted = false;
                }
            }
            if(trusted) {
                jugde = person;
            }
        }
    }
    return jugde;
}

console.log(findTownJudge(2, [[1,2]]));
console.log(findTownJudge(3, [[1,3],[2,3]]));
console.log(findTownJudge(3, [[1,3],[2,3],[3,1]]));
