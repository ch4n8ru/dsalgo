/*  Here the smallest or the biggest element is selected and swapped with the anchor element
the anchor element moves forward one at a time


after nth pass n elements at the beginning are sorted 

ONLY EFFICIENT IF FOR SOMEREASON NUMBER  OF SWAPS ARE TO BE REDUCED

EXAMPLE
consider the array [1,5,9,2,3]

[1,  5,  9,  2,  3]         minIndex = i ; is arr[j] < arr[minIndex]  false
i   j
[1,  5,  9,  2,  3]         minIndex = i ; is arr[j] < arr[minIndex]  false
i        j
[1,  5,  9,  2,  3]         minIndex = i ; is arr[j] < arr[minIndex]  false
i            j
[1,  5,  9,  2,  3]         minIndex = i ; is arr[j] < arr[minIndex]  false
i                j

PASS COMPLETE SWAP arr[i] and arr[minIndex]

[1,  5,  9,  2,  3]         minIndex = i ; is arr[j] < arr[minIndex]  false
     i   j
[1,  5,  9,  2,  3]         minIndex = i ; is arr[j] < arr[minIndex]  true; set minindex = j
     i       j
[1,  5,  9,  2,  3]         minIndex = i ; is arr[j] < arr[minIndex]  false
     i           j

PASS COMPLETE SWAP arr[i] and arr[minIndex]

[1,  2,  9,  5,  3]         minIndex = i ; is arr[j] < arr[minIndex]  true; set minindex = j
         i   j

[1,  2,  9,  5,  3]         minIndex = i ; is arr[j] < arr[minIndex]  true; set minindex = j
         i       j

PASS COMPLETE SWAP arr[i] and arr[minIndex]

1,  2,  3,  5,  9]         minIndex = i ; is arr[j] < arr[minIndex]  false
            i   j

PASS COMPLETE SWAP arr[i] and arr[minIndex]

*/

function selectionSort(arr){
    /* Variable to store index of min element */
    let minIndex;

    for(let i = 0; i< arr.length - 1; i++){
        minIndex = i;
        for(let j = i+1; j < arr.length; j++ ){
            if(arr[j] < arr[minIndex]) minIndex = j
        }
        if(minIndex != i) swap(arr , i , minIndex)
    }
    return arr
}

function swap(arr , index1 , index2){
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}
console.log(selectionSort([1,5,-89,-56,5]))

/* 
Time complexity O(n^2) 
*/