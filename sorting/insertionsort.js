/* Unlike selection sort where the smallest element is selected at each pass and swapped with the anchor,
Insertion sort works by finding the postion where the current element should be inserted at each pass */

/* 
Works best:
1.Data is almost sorted
2.Data is incoming live
 */

/* Implementation
At each pass, anchor at an element and find where it should be placed in the sorted left half



consider arr  = [6,2,4,0,1]

[6,  2,  4,  0,  1]      find where arr[j] should be placed in sorted array upto arr[i]; 
 j   i                     it should be placed before 6 index 0 

[2,  6,  4,  0,  1]      find where arr[j] should be placed in sorted array upto arr[i]; 
     j   i                it should be placed before 6 index 1 

[2,  4,  6,  0,  1]      find where arr[j] should be placed in sorted array upto arr[i]; 
         j   i                it should be placed before 6 index 2 
         
[2,  4,  6,  0,  1]      find where arr[j] should be placed in sorted array upto arr[i]; 
         j   i                it should be placed before 2 index 0 

[2,  4,  0,  6,  1]      Shifting arr[i] to the correct position
         j   i            

[2,  0,  4,  6,  1]      Shifting arr[i] to the correct position
     j       i
                 
[0,  2,  4,  6,  1]      Shifting arr[i] to the correct position
 j           i            placed at right position placed at right position move i 

[0,  2,  4,  6,  1]      arr[i] should be placed between 0 and 2
             j   i         

[0,  2,  4,  1,  6]      arr[i] should be placed between 0 and 2
             j   i        
[0,  2,  1,  4,  6]      arr[i] should be placed between 0 and 2
         j       i        
[0,  2,  1,  4,  6]      arr[i] should be placed between 0 and 2
     j           i        
[0,  1,  2,  4,  6]      arr[i] should be placed between 0 and 2
     j           i        


 






*/


function insertionSort(arr){
    /* Take each element in the array and find the position it should be placed */
    for(let i = 1; i < arr.length; i++ ){
        let currentVal = arr[i]
        for(var winend = i - 1 ; winend >= 0 && arr[winend] > currentVal; winend--){
            /* Shift the larger element one place up until the postion where the curreentElement must be placed is reached/ */
            arr[winend+1] = arr[winend]
        }
        /* Winend points to the one index before the position where the current element should be placed */
        arr[winend+1] = currentVal
    }
    
    return arr;

}

function swap(arr , index1 , index2){
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}

console.log(insertionSort([1,8,-5,2,7,2,4]))

/* Time Complexity

O(n^2)*/