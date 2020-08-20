/* Undirected weighted graph */
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, w) {
        if (!(this.validVertex(v1) && this.validVertex(v2))) return "Invalid vertices";
        this.adjacencyList[v1].push({ node: v2, w });
        this.adjacencyList[v2].push({ node: v1, w });
    }
    validVertex(v) {
        return this.adjacencyList[v] != null;
    }

    removeEdge(v1, v2) {
        if (!(this.validVertex(v1) && this.validVertex(v2))) return "Invalid vertices";
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e.node != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e.node != v1);
    }

    removeVertex(v) {
        if (!this.validVertex(v)) return "Invalid vertices";
        this.adjacencyList[v].forEach((edge) => {
            this.removeEdge(v, edge.node);
        });
        delete this.adjacencyList[v];
    }
}

wg = new WeightedGraph();

wg.addVertex("a");
wg.addVertex("b");
wg.addVertex("c");
wg.addVertex("d");
wg.addVertex("e");

wg.addEdge("a", "b", 3);
wg.addEdge("b", "c", 9);
wg.addEdge("a", "d", 1);
wg.addEdge("c", "d", 5);
wg.addEdge("a", "e", 4);
