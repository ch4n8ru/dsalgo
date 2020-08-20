/* Finds the shortest path between two vertices */
/* Undirected weighted graph */
class Node {
    constructor(val, p) {
        this.val = val
        this.priority = p;
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
        return this
    }

    bubbleUp() {
        let idx = this.values.length - 1
        let parentIdx = Math.floor((idx - 1) / 2);
        while (parentIdx > -1 && this.values[idx].priority < this.values[parentIdx].priority) {
            this.swap(parentIdx, idx)
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }

    }

    swap(idx1, idx2) {
        let t = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = t;
    }

    dequeue() {
        if (!this.values) return
        let min = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        this.sinkDown();
        return min
    }

    sinkDown() {
        let parentIdx = 0;

        while (true) {
            let length = this.values.length
            let swapIdx = null;
            let parent = this.values[parentIdx];
            let leftIdx = 2 * parentIdx + 1
            let rightIdx = 2 * parentIdx + 2

            if (leftIdx < length) {
                if (this.values[leftIdx].priority < parent.priority) {
                    swapIdx = leftIdx
                }
            }
            if (rightIdx < length) {
                if ((swapIdx === null && this.values[rightIdx].priority < parent.priority) || (swapIdx != null && this.values[rightIdx].priority < this.values[leftIdx].priority)) {
                    swapIdx = rightIdx
                }

            }
            if (!swapIdx) break;
            this.swap(swapIdx, parentIdx);
            parentIdx = swapIdx
        }
    }
}



// pq.dequeue()

// console.log(pq.values)

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


    /* Dijkstra's algorithm
    initialize distances which stores the distance to each node from the start point set all values to null
    initialize previous which stores the previous of each node 
    initialize  a priority queue and set every vetex's priority to infinity except for the starting node .

    As long as there is something in the priorityqueue do:
        select the smallest node currently in pq   
        add to visited
        look at its neighbours and calculate its distance from start point
            if the new distance is smaller than one in priority queue update pq 
            update distances 
            update previous
    
    */
    shortestPath(start, finish) {
        const nodes = new PriorityQueue();
        /* Distances stores the shortest path from the start to each vertex in the graph */
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];
        //     build up initial state

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        //     as long as there is something to visit

        while (nodes.values.length) {
            /* Get the smallest node at theat instance */
            smallest = nodes.dequeue().val
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            /* distances[smallest] !== Infinity this check is to overcome the limitation that the priority queue 
            can handle duplicates */
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbourIdx in this.adjacencyList[smallest]) {
                    let neighbour = this.adjacencyList[smallest][neighbourIdx];

                    let candidate = distances[smallest] + neighbour.w;
                    let nextNeighbour = neighbour.node;
                    if (candidate < distances[nextNeighbour]) {
                        distances[nextNeighbour] = candidate;
                        previous[nextNeighbour] = smallest;
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }


        }
        path.push(start)
        return path.reverse();
    }
}

wg = new WeightedGraph();

wg.addVertex("a");
wg.addVertex("b");
wg.addVertex("c");
wg.addVertex("d");
wg.addVertex("e");
wg.addVertex("f");

wg.addEdge("a", "b", 4);
wg.addEdge("a", "c", 2);
wg.addEdge("b", "e", 3);
wg.addEdge("c", "d", 2);
wg.addEdge("c", "f", 4);
wg.addEdge("d", "e", 3);
wg.addEdge("d", "f", 1);
wg.addEdge("e", "f", 1);

