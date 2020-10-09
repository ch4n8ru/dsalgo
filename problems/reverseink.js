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
//  s.push('m')
//  s.push('a')
//  s.push('l')
//  s.push('a')
//  s.push('y')
//  s.push('a')
//  s.push('l')
//  s.push('a')
//  s.push('m')

 s.push(1)
 s.push(2)
//  s.push(3)
//  s.push(2)
//  s.push(2)
 s.push(1)
//  s.push('a')
//  s.push('l')
//  s.push('a')
//  s.push('m')


function linkedListPalindrome(head){
    let mid = findMid(head)
    let reversed = reverse(mid);
//     mid.next = reversed
//     console.log(head)
    let curr = head;

    while(reversed){
        if(reversed.val != curr.val) return false
        reversed = reversed.next;
        curr = curr.next;
    }
    return true
}

function findMid(head){
    let mid;

    let slowPtr = head;
    let fastPtr = head;
    while(fastPtr && fastPtr.next != null){
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    }
    return slowPtr
}

function reverse(head){
    let prev = null;
    let current = head;

    
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

function reverseinK(head , k){

}
// console.log(linkedListPalindrome(s.head))
console.table(reverse(s.head));