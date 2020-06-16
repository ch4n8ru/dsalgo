/* Default imports dont need {} */
// import bfs from "./traversals/bfs";

/* For insertion start at the root and based on the comparision decide where the node
should be inserted */
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, tempRoot = this.root) {
        let newNode = new Node(val);
        if (!this.root) this.root = newNode;
        else {
            if (tempRoot.val == val) {
                tempRoot.count++;
            } else if (val < tempRoot.val) {
                if (!tempRoot.left) tempRoot.left = newNode
                else this.insert(val, tempRoot.left)
            } else {
                if (!tempRoot.right) tempRoot.right = newNode
                else this.insert(val, tempRoot.right)
            }
        }
        return this
    }

    find(val, tempRoot = this.root) {
        let found;
        if (!tempRoot) return -1
        else if (tempRoot.val == val) return 'found', tempRoot;
        else if (val > tempRoot.val) found = this.find(val, tempRoot.right)
        else found = this.find(val, tempRoot.left)
        return !!found

    }
}


function bfs(tree){
    data = []
    queue = []
    queue.push(tree.root)
    let node
    while(queue.length){
        node = queue.shift();
        data.push(node.val)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return data;
}

let bst = new BST();
bst.insert(1)
bst.insert(10)
bst.insert(4)
bst.insert(3)
bst.insert(2)
bst.insert(6)
bst.insert(5)
bst.insert(5)
bst.insert(5)
bst.insert(4)
bst.insert(7)
bst.insert(1)
bst.find(11)

console.log(bfs(bst))

/* Time complexity for bst
Average and Best case
Insertion: O(logn)
Searching: O(logn)

It depends on the tree:
One sided trees are not efficient
*/