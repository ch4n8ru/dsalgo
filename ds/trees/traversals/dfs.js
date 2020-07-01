/* Preorder traversal 

    visit all the nodes on the left then go to the right

    to achieve this we use a stack (callstack here) and 

    for the tree 

    
            10
        6      15
     3    8      20

    the dfspreorder is [10,6,3,8,15,20]

      */



function dfsPreorderRecursive(tree){
    
        let visited = []
        function traverse(root){
            visited.push(root.val);
            if(root.left) traverse(root.left)
            if(root.right) traverse(root.right)
        }
        if(!tree.root) return null
        else traverse(tree.root)
    
        return visited;
}



function dfsPreorderIterative(tree){
    if(!tree.root) return []
    let visited = []
    let stack = [];
    stack.push(tree.root);
    while(stack.length){
        let node = stack.pop()
        visited.push(node.val);
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return visited;
}



/* DFS post order 
here first visit all the children and then visit its root

           10
        6      15
     3    8      20

     postorder is = [3,8,6,20,15,10]

*/

function dfsPostOrder(tree){
    if(!tree.root) return null
    let visited = [];
    let stack = [];
    stack.push(tree.root);
    function traverse(root){
        if(root.left) traverse(root.left)
        if(root.right) traverse(root.right)
        visited.push(root.val);
    }
    traverse(tree.root)
    return visited
}


/* Visit the node after visiting its left and right */

/* 
           10
        6      15
     3    8      20

preOrder = [3, 6, 8, 10, 15, 20] 
*/
function dfsPreOrder(tree){
    if(!tree.root) return null
    let visited = [];
    let stack = [];
    stack.push(tree.root);

    function traverse(root){
        if(root.left) traverse(root.left)
        visited.push(root.val)      //visit step
        if(root.right) traverse(root.right)
    }
    traverse(tree.root)
    return visited
}




