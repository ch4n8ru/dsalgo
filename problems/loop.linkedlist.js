
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        //head pointer to the first element
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        /* function to insert at the end */
        let newNode = new Node(val);
        if (!this.head) {
            /* Meaning the list is empty */
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this
    }
}
 s = new SinglyLinkedList()

 s.push(3)
 s.push(1)
 s.push(5)
 s.push(4)
 s.push(8)

 a = s.head.next.next.next
 b = s.head.next.next

 a.next = b


//  let lookup = []
//  let temp = s.head;

function detectLoop(head){
    let fastptr = head ;
    let slowptr = head;

    while(fastptr && fastptr.next && slowptr){
        slowptr = slowptr.next;
        fastptr = fastptr.next.next;

        if(slowptr === fastptr) {
            console.log(fastptr , slowptr)
            return true
            }
    }

    return false

}