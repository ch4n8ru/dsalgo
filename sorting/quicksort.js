function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

/* function for pivot */

function pivot(arr, start = 0, end = arr.length) {
    /* By default pick the first element as the pivot element */
    let pivotIndex = start
    let initialPivotIndex = pivotIndex
    let pivotElement = arr[initialPivotIndex]

    let i = start;
    while (i <= end) {
        if (arr[i] < pivotElement) {
            pivotIndex++;
            swap(arr, pivotIndex, i)
        }
        i++;


    }
    // console.log(start , end ,arr ,pivotIndex)
    swap(arr, pivotIndex, initialPivotIndex)
    return pivotIndex
}

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

let arr = [5, 2, 1, 8, 4, 7, 6, 4]
// arr = [8,7,6]
let index = quickSort(arr)
console.log(index)

/* Time Complexity 

Best case O(nlogn)
Average case O(nlogn)
Worst Case O(n^2)  ==> Happens when the array is already sorted and the smallest or the largest e   lement is always picked
*/