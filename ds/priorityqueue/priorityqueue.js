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
        let popped = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        this.sinkDown();
        return popped
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

let pq = new PriorityQueue()

pq.enqueue(2, 3)
pq.enqueue(2, 9)
pq.enqueue(2, 8)
pq.enqueue(2, 0)



// pq.dequeue()

console.log(pq.values)