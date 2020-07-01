/* Neighbours before children

Each vertex can be assigned a height based on how many jumps away the vertex is from a node
*/

function bfsIterative(graph , vertex){
    let stack = [];
    let visited = {};
    let results = [];
    let adjacencyList = graph.adjacencyList;
    let currVertex;
    stack.push(vertex);
    visited[vertex] = true

    while(stack.length > 0){
        console.log(stack)
        currVertex = stack.shift();
        results.push(currVertex)
       adjacencyList[currVertex].forEach(neighbour =>{
           if(!visited[neighbour]) {
               visited[neighbour] = true
               stack.push(neighbour)
               }
       })
    }
   return results

}