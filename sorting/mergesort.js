/* Works on the fact that the single length arrays are always sorted */

function mergeSort(arr){
    /* recursively call mergeSort until the single elemnts are found ,
    once found merge them both */

    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0 , mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left , right);
}



/* Function to merge two rorted arrays */

function merge(arr1, arr2) {
    let merged = [];
    let i = 0
    let j = 0

    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] && arr2[j]) {
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i])
                i++;
            } else {
                merged.push(arr2[j])
                j++;
            }
        } else if (arr1[i]) {
            merged.push(arr1[i])
            i++
        } else if (arr2[j]) {
            merged.push(arr2[j])
            j++
        }
    }

    return merged
}

/* TIME COMPLEXITY 

Best , Average ,Worst O(nlogn)
logn => number of operations to split it (de)

n => n comparisions for merge algorithms

SPACE COMPLEXITY :
O(n)
*/
mergeSort([1, 3, 7, 8], [3, 5, 8])