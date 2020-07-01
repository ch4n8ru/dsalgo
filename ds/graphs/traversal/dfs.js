/* Deepening the traversal before broadening

in graph depth means moving away from the root(picked root) visit the children first and then its siblings
*/

/* For the graph 

             A 
          /    \
        B       C
        |       |
        D-------E
         \    /
           F

Whose adjacency list is
A: (2) ["B", "C"]
B: (2) ["A", "D"]
C: (2) ["A", "E"]
D: (3) ["B", "E", "F"]
E: (3) ["C", "D", "F"]
F: (2) ["D", "E"]

The DFS happens as follows

Implementation Recursively:

initialize visited = {} , result = []
for a given vertex:
if !vertex return
add to visited and result
for each neighbours of given vertex 
    if !visited recursively call dfs



 */
/**
 *
 *
 * @param {*} graph
 * @param {*} vertex
 * @returns list all of all vertices in the graph
 */
function dfsRecursive(graph, vertex) {
    const adjacencyList = graph.adjacencyList;
    let result = [];
    let visited = {};

    function dfs(vertex) {
        if (!vertex) return
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(v => {
            if (!visited[v]) return dfs(v)
        })
    }

    dfs(vertex);
    return result
}


/**
 *
 *
 * @param {*} graph
 * @param {*} vertex
 * @returns list all of all vertices in the graph
 */
function dfsIterative(graph, vertex) {
    let stack = [];
    let visited = {};
    let results = [];
    let adjacencyList = graph.adjacencyList;
    let currVertex;
    stack.push(vertex);
    visited[vertex] = true

    while (stack.length > 0) {
        console.log(stack)
        currVertex = stack.pop();
        results.push(currVertex)
        adjacencyList[currVertex].forEach(neighbour => {
            if (!visited[neighbour]) {
                visited[neighbour] = true
                stack.push(neighbour)
            }
        })
    }
    return results

}/* 
Stack at each step
["B", "C"]
["B", "E"]
["B", "D", "F"]
["B", "D"]
["B"]
["A", "C", "E", "F", "D", "B"] 
*/