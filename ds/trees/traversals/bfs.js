/* Visit nodes on the same level before moving down (work horizontally)



IMPLEMENTATION:

*Use a queue to backtrack and "remember" the root of the current level

the queue at any instant contains the flat version of the sub tree or the subtrees to
be visited are queued

[6 , 15 , 3 , 8] ==> here the sub tree 
                                       6
                                    3     8
is queued to be visited after the node 15 is visited (15 may be queued at an earlier
    iteration as a subtree)

6,15 are on the same level so all the queue does is queue the items on the same level

at each iteration when the left and right are added the nodes at the same level are added


            10
        6      15
     3    8      20

queue: []
visited: []

initially add the root node to the queue
queue: [10]
visited: []

now dequeue 10 ==> dequeue implies that we are visiting the node and add to visited
queue: []
visited: [10]

now add the left and right of the root to the queue
queue: [6 , 15]
visited: [10]

now dequeue 6 ==> dequeue implies that we are visiting the node and add to visited
queue: [15]
visited: [10 , 6]

now add left and right of 6 to the queue
queue: [ 15 , 3 , 8]
visited: [10 , 6]

dequeue 15 and add to visited
queue: [ 3 , 8 ]
visited: [10 , 6 ,15]

add left and right of 15 to the queue
queue: [ 3 , 8 , 20]
visited: [10 , 6 , 15]

add left and right of 3 to the queue ==> no left or right so dequeue 3 and add to visited
queue: [8 , 20]
visited: [10 , 6 ,15 , 3]

add left and right of 8 to queue ==> none so dequeue 8
queue: [20]
visited: [10 , 6 ,15 , 3 , 8]

add left and right of 20 to queue ==> none so dequeue 20
queue: []
visited: [10 , 6 ,15 , 3 , 8 , 20]

queue is empty so break
 
*/

/* Only one default export per module */
export default function bfs(tree){
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




