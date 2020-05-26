/* One of the basic sorting algorithms 

*at each pass the largest or the smallest element moves to the end 

MOST EFFICIENT WHEN THE ARRAY IS NEARLY SORTED

*/

function bubbleSort(arr) {
    let noSwap;
    let len = arr.length;
    for(let i = len - 1 ; i > 0; i-- ){
        /* for loop for for counting passes */
        /* i value shrinks as the last item at each pass is the largest */
        noSwap = true
        for(let j = 0; j < len  - 1; j++){
            if(arr[j] > arr[j+1])   {
                swap(arr, j , j+1)
                noSwap = false
            }

        }
        if(noSwap) break
    }
    return arr
}

function swap(arr , index1 , index2){
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}

console.log(bubbleSort([1, 1, 2, -5, -9, 71]))