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


function bfs(root) {
    let queue = [];
    let data = [];
    queue[0] = root;

    while (queue.length) {
        let current = queue.shift();
        data.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return data
}


function inOrder(root) {
    let visited = []
    function traverse(temproot) {
        if (temproot.left) traverse(temproot.left);
        visited.push(temproot.val);
        if (temproot.right) traverse(temproot.right)
    }

    traverse(root)
    return visited
}

function preOrder(tree) {
    let visited = [];

    function traverse(root) {
        visited.push(root.val)
        if (root.left) traverse(root.left)
        if (root.right) traverse(root.right)
    }
    traverse(tree.root)
    return visited
}

function postOrder(tree) {
    let visited = []
    function traverse(root) {
        if (root.left) traverse(root.left)
        if (root.right) traverse(root.right);
        visited = [...visited, root.val]

    }
    traverse(tree.root)
    return visited
}

function height(root) {
    if (root == null) return 0

    return Math.max(1 + height(root.left), 1 + height(root.right))

}

function bottomView(root) {
    let treeMap = {};
    let queue = [];
    let data = [];
    queue[0] = { node: root, hd: 0 };

    while (queue.length) {
        let current = queue.shift();
        let node = current.node;
        let hd = current.hd;

        treeMap[hd] = node.val;
        if (node.left) {
            queue.push({ node: node.left, hd: hd - 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, hd: hd + 1 });
        }
    }
    let res = Object.entries(treeMap)
    res = res.sort((a, b) => {
        return a[0] - b[0]
    }).map(arr => arr[1])
    return res;
}


function lca(root, x, y) {
    if (!root) return null;
    if (root.val === x || root.val === y)
        return root;

    let leftSearch = lca(root.left, x, y)
    let rightSearch = lca(root.right, x, y)


    if (leftSearch && rightSearch) return root

    if (!rightSearch) return leftSearch;
    if (!leftSearch) return rightSearch;



}

pre = preOrder(bst);
ino = inOrder(bst.root)

function cTree(pre, ino, is, ie) {
    let preIndex = 0
    function constructTree(pre, ino, is, ie) {
        if (is > ie) return null;
        if (!pre) return null;


        let tempRoot = pre[preIndex];
        preIndex++;
        let root = new Node(tempRoot);
        let inIndex;
        for (let i = is; i <= ie; i++) {
            if (ino[i] == tempRoot) {
                inIndex = i
                break
            }
        }
        console.log(preIndex, inIndex)
        root.left = constructTree(pre, ino, is, inIndex - 1)
        root.right = constructTree(pre, ino, inIndex + 1, ie)

        return root
    }
    let r = constructTree(pre, ino, 0, ino.length - 1)
    return r
}


let bst = new BST();
bst.insert(30)
bst.insert(10)
bst.insert(7)
bst.insert(6)
bst.insert(5)
bst.insert(4)
bst.insert(9)
bst.insert(45)
bst.insert(32)
bst.insert(47)


// bst.find(11)

// console.log(bfs(bst))