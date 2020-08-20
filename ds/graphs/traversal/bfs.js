/* Neighbours before children

Each vertex can be assigned a height based on how many jumps away the vertex is from a node
*/

function bfsIterative(graph , vertex){
    let queue = [];
    let visited = {};
    let results = [];
    let adjacencyList = graph.adjacencyList;
    let currVertex;
    queue.push(vertex);
    visited[vertex] = true

    while(queue.length > 0){
        console.log(queue)
        currVertex = queue.shift();
        results.push(currVertex)
       adjacencyList[currVertex].forEach(neighbour =>{
           if(!visited[neighbour]) {
               visited[neighbour] = true
               queue.push(neighbour)
               }
       })
    }
   return results

}