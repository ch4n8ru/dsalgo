/* One of the basic sorting algorithms 

*at each pass the largest or the smallest element moves to the end 

MOST EFFICIENT WHEN THE ARRAY IS NEARLY SORTED

*/

function bubbleSort(arr) {
    let noSwap;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        noSwap = true
        // console.log(arr,arr[i],arr[i+1])
        if (arr[i] > arr[i + 1]) {
            swap(arr , i , i+1);
            noSwap = false
        }
        if ((i == len - 1) && len > 0) {
            i = -1;
            len--;
            
        }
        // if(noSwap) break
    }
    return arr
}

function swap(arr , index1 , index2){
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}

console.log(bubbleSort([1, 1, 2, -5, -9, 71]))