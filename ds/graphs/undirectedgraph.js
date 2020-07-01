class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    /* Add a vertex
    push the name of the vertex and assign an empty list
    */

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1 , v2){
        if(this.adjacencyList[v1] != null && this.adjacencyList[v2] != null)
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1 , v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!== v1)
    }
    
    removeVertex(vertex){
    this.adjacencyList[vertex].forEach(v => {
        this.removeEdge(vertex , v)
    })
    delete this.adjacencyList[vertex];
    }
}

g = new Graph();
g.addVertex('A');
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A' , "B")
g.addEdge('A' , "C")
g.addEdge('B' , "D")
g.addEdge('C' , "E")
g.addEdge('D' , "E")
g.addEdge('D' , "F")
g.addEdge('E' , "F")