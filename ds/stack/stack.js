/* It is an abstract data structure defines no structure but the implementation must follow the LIFO
last in first out

Most common example 
1.call stack 
2.Undo
3.Browser History (how would redo work)
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
//         implement the unshift function and insert at the beginning
    let newNode = new Node(val);
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    }
    else{
        newNode.next = this.first;
        this.first = newNode
    }

    this.size++;
    }

    pop(){
        if(!this.first) return null
        let popped = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = this.first.next;
        popped.next = null;
        this.size--;
        return popped
    }
}

let stack = new Stack()

/* Time complexity 
for our implementation
push O(1)
pop O(1) */