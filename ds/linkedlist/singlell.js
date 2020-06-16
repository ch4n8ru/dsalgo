/* Consists of nodes that have a value and the pointer to the next node

Tracks the head , tail , length

BEST FOR:
INSERTION AND REMOVAL

WORST AT:
RANDOM ACCESS
*/

/* WHY USE?

OVERCOMES THE FOLLOWING PROBLEMS:

*WITH ARRAYS
*Deletion and insertion especially at the beginning is very expensive,
since the elements must be reindexed
---------------------------------------------------------------------

*ADVANTAGES:
*Constant time insertion and deletion at the beginning and end

*/


/* Quirks
 
*No Indices hence No Random Access
*Accessing any element in the middle requires traversing

*/


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

    pop() {
        /* remove the last item */
        if (!this.head) return undefined
        /* pre is always one behind tempPtr */
        let pre = this.head
        /* tempPtr goes until the last node */
        let tempPtr = this.head;
        while (tempPtr.next != null) {
            /* tempPtr not an Object and is a pointer to an object so pre isnt affected when tempPtr is traversed */
            pre = tempPtr;
            tempPtr = tempPtr.next

        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = pre;
            this.tail.next = null
        }
        this.length--;

        return tempPtr

    }

    shift() {
        /* remove element at the beginning */
        if (!this.head) return undefined
        let removedNode = this.head;
        if (this.head == this.tail) {
            /* Single length list */
            this.tail = null
        }
        this.head = this.head.next;
        this.length--;
        return removedNode

    }

    unshift(val) {
        //         Insert node at the beginning
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++
        return this
    }

    get(index) {
        //         needs traversing not as fast as array access
        if (index < 0 || index >= this.length) return undefined
        let counter = 0;
        let current = this.head
        while (counter != index) {
            current = current.next
            counter++;
        }
        return current
    }

    set(idx, val) {
        //         set the value at the given index
        let node = this.get(idx);
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(idx, val) {
        //         insert the given value node at the specified position

        if (idx < 0 || idx > this.length) return undefined
        if (idx == this.length) return !!this.push(val)
        else if (idx == 0) return !!this.unshift(val)
        else {
            let newNode = new Node(val)
            let counter = 0;
            let pre = this.get(idx - 1)
            newNode.next = pre.next
            pre.next = newNode
            this.length++
        }
        return true
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined
        else if (idx === 0) return !!this.shift()
        else if (idx === this.length - 1) return !!this.pop()
        else {
            let pre = this.get(idx - 1)
            let deletedNode = pre.next;
            pre.next = deletedNode.next;
            deletedNode.next = null;
            this.length--
            return true
        }
    }

    reverse() {

        if (!this.head) return undefined
        let prev;
        let current;
        let next;

        let temp = this.head;
        this.head = this.tail
        this.tail = temp;
        current = this.tail;

        while (current) {
            next = current.next;
            current.next = prev
            prev = current;
            current = next;
        }

        return this
    }

    display() {
        let currNode = this.head;
        let displayStr = ''
        while (currNode) {
            displayStr += `${currNode.val}-->`
            currNode = currNode.next
        }
        return `Length: ${this.length} , List: ${displayStr}`
    }
}

let list = new SinglyLinkedList()


list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)

/* Big O for some operations
OP         SLL                                                                 ARRAY
insertion  O(1) for start or end O(n) for inserting in middle                  O(n)
removal    O(n)  **removal from the first is less costly                       O(n) reindex the remaining elements after removing from middle
search     O(n)                                                                O(logn) for binary search
access     O(n)                                                                O(1)

*/