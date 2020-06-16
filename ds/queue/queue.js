/* Abstrach data structure which must follow the FIFO

APPLICATIONS:
Processing queue,
Printer Queue*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Q{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


// 1 <-- 2 <-- 3 <-- 4 <-- 5  q direction in current implementation
    enQ(val){
//         insert at end since it is cheaper to remove from the beginning of a sll
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.size++;
    }

    deQ(){
//         REmove from the beginiing
    if(!this.head) return null
    let removed = this.head.val
    if(this.head == this.tail){
        this.tail = null
    }
    this.head = this.head.next
    this.size--;
    return removed

}
}


let q = new Q()

/* Time Complexity
enqueue - O(1) 
dequeue - O(1) 
*/