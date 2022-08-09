var allPathsSourceTarget = function (graph) {
    let start = 0;
    let end = graph.length - 1;
    let allPaths = getPath(graph,start, end);
    console.log(allPaths);
};

function getPath(graph, start, end) {
    if (start == end) {
        return [end];
    } else {
        let result = [];
        for (let i of graph[start]) {
            let alternateWays = getPath(graph, i, end);
            for(let j of alternateWays ) {
                result.push([start].concat(j));
            }
        }
        return result;
    }
}
