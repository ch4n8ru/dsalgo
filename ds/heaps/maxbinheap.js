
/* Best at insertiion and removal */


class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    /* INSERTION 
    There is no order in which the child nodes must be inserted only condition being it must be smaller than the root node
    initially push the inserted element to the end 

    [41,39,33,18,27,12] insert 55

    [41,39,33,18,27,12,55] now find its parent floor((6-1)/2) = 2 is 55 > 33 true ; swap
     0  1  2  3  4  5  6

    [41,39,55,18,27,12,33] now find its parent floor((2-1)/2) = 0 is 55 > 41 true ; swap
     0  1  2  3  4  5  6

    [55,39,41,18,27,12,33] now find its parent floor((0-1)/2) = -1 which is less than 0 break loop
     0  1  2  3  4  5  6

    Finally
                55
        39              41
    18      27      12      33

     */
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return this

    }
    /* [41,39,33,18,27,12] */
    bubbleUp(){
        let idx = this.values.length - 1;
        let node = this.values[idx];
        let parentIdx = Math.floor((idx-1)/2)
        while(parentIdx > -1 && this.values[idx] > this.values[parentIdx]){
                let temp = this.values[parentIdx]
                this.values[parentIdx] = this.values[idx];
                this.values[idx] = temp;  
                idx = parentIdx; 
                parentIdx = Math.floor((idx-1)/2)
        }
    }

    /* Extract max 
        return the max node which happens to be the root node in maxbinheap

        [41,39,33,18,27,12] initially copy the last leaf to index 0 and pop the last element (pop the root)
        let max = heap[0]
        heap[0] = heap[heap.len-1]
        heap.pop()

        [12,39,33,18,27] now we have to sink down 12

        pseudocode for sink:
        compare the node with its child 
            if it has both swap 
                and both are larger then swap with the largest child
            else ignore
            if it has leftchild
                and is greater than parent swap
            if it has rightchild
                and is greater than parent swap

        implementation:
        [12,39,33,18,27] ==> 12's children are 39 , 33 => largest is 39 hence swap;and swap parentIdx

        [39,12,33,18,27]  ==> 12's children are 18 , 27 => largest is 27 hence swap

        [39,27,33,18,12]` ==>> 12 has no children hence break

    */

    extractMax(){
        //         return the maximum value in the heap
                    if (this.values.length == 1) return this.values.pop()
        //         if heap is non empty and has atleast 2 elements
                    let max = this.values[0]; 
                    this.values[0] = this.values[this.values.length - 1]
                    this.values.pop()
                    this.sinkDown()
                    return max , this.values
            }
        
        //     sinkDown(){ 
        // //         swap with the biggest child
        //         let parentIdx = 0
        //         let leftChildIdx;
        //         let rightChildIdx;
        //         while(true){
        //             let leftChildIdx = parentIdx*2 + 1
        //             let rightChildIdx = parentIdx*2 + 2
        //             if(leftChildIdx < this.values.length && rightChildIdx < this.values.length){
        //                 let maxChildIdx = this.values[leftChildIdx] > this.values[rightChildIdx] ? leftChildIdx : rightChildIdx;
        //                 if(this.values[maxChildIdx] > this.values[parentIdx]){
        //                     this.swap(maxChildIdx , parentIdx)
        //                      parentIdx = maxChildIdx;
        //                 }else break
        //             }
        //             else if(leftChildIdx < this.values.length){
        //                 this.swap(leftChildIdx, parentIdx);
        //                 parentIdx = leftChildIdx
        //             }
        //             else if(rightChildIdx < this.values.length){
        //                 this.swap(rightChildIdx , parentIdx);
        //                 parentIdx = rightChildIdx
        //             }
        //             else break
                   
        //         }
        //     }
        /* Refactored */
        sinkDown(){ 
            //         swap with the biggest child
                    let parentIdx = 0;
                    while(true){
                        let parentElement = this.values[parentIdx]
                        let leftChildIdx = parentIdx*2 + 1
                        let rightChildIdx = parentIdx*2 + 2
                        let swapIndex = null;
                        const length = this.values.length;
                         if(leftChildIdx < length){
                             if(this.values[leftChildIdx] > parentElement) swapIndex = leftChildIdx
                        }
                         if(rightChildIdx < length){
                             /* if swap is not set assign right child to swap
                             if swap is set and right child > left child index assign right child index
                             */
                            if(
                            (swapIndex === null && this.values[rightChildIdx] > parentElement)||
                            (swapIndex !== null && this.values[rightChildIdx] > this.values[leftChildIdx])
                            ){
                                swapIndex = rightChildIdx;
                            }
                        }
                        if(swapIndex === null) break;
            
                        this.swap(parentIdx , swapIndex);
                        parentIdx = swapIndex
                    }
                }
            
        
            swap(idx1 , idx2){
                let t = this.values[idx1];
                this.values[idx1] = this.values[idx2]
                this.values[idx2] = t
            }
}

maxbinHeap = new MaxBinaryHeap() 

/* 
TIME COMPLEXITY

Insertion O(logn)
Removal O(logn)
Search O(n)

*/