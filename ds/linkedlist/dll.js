/* Consists of nodes that have a value and the pointer to the next node and the prev node

Tracks the head , prev , tail , length

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

*WITH SLL
Pop operation faster since we can easily find the last before node
---------------------------------------------------------------------

*ADVANTAGES:
*Constant time insertion and deletion at the beginning and end

*/


/* DISADVANTAGES
*VS ARRAYS
*No Indices hence No Random Access
*Accessing any element in the middle requires traversing

*VS SLL
Consumes more space
*/

// DLL
// DLL
// DLL
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    fromArray(arr) {
        for (let ele of arr) {
            this.push(ele)
        }
    }
    push(val) {
        //         insert at end
        let node = new Node(val);
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node;
        }
        this.length++;
        return this
    }

    pop() {
        //         remove from the end
        if (!this.head) return undefined
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let oldTail = this.tail;
            this.tail = oldTail.prev;
            //         If prev not set to null if oldTail is accessible somehow that gives the whole list
            oldTail.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return removed;
    }

    shift() {
        //         remove the first element
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null
        } else {
            this.head = this.head.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;

    }

    unshift(val) {
        //         add a node to the beginning
        let newNode = new Node(val)
        if (!this.head) {
            // empty list
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = this.head.prev //set head to new node
        }
        this.length++;
    }

    get(idx) {
        //         return the element at the given index
        if (idx < 0 || idx >= this.length) return null
        let mid = this.length / 2;

        if (idx <= mid) {
            let counter = 0;
            let current = this.head;
            while (idx != counter) {
                current = current.next;
                counter++;
            }
            return current
        } else {
            let current = this.tail;
            let counter = this.length - 1
            while (idx != counter) {
                current = current.prev;
                counter--;
            }
            return current

        }
    }

    set(idx, val) {
        let foundNode = this.get(idx)
        if (foundNode) {
            foundNode.val = val
            return true
        }

        return false
    }

    insert(idx, val) {
        //     insert the given val at the specified index
        if (idx < 0 || idx > this.length) return null
        if (idx == 0) this.unshift(val);
        else if (idx == this.length - 1) this.push(val)
        else {
            let newNode = new Node(val);
            let prevNode = this.get(idx - 1);
            newNode.next = prevNode.next;
            newNode.prev = prevNode;
            prevNode.next = newNode;
            this.length++
        }

    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return null
        if (idx == 0) this.shift();
        else if (idx == this.length - 1) this.pop()
        else {
            let toDelete = this.get(idx)
            let prevNode = toDelete.prev;
            let nextNode = toDelete.next;
            toDelete.next = null;
            toDelete.prev = null
            prevNode.next = nextNode;
            nextNode.prev = prevNode
            this.length--;
        }
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

let list = new DoublyLinkedList();

/* TIme Complexity 
Insertion O(1) 
Removal O(1) 
Search O(N) 
Random Access O(N)

Faster than sll at search but uses more memory 
 */