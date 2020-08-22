function sort(arr){

    let start = 0 ;
    let mid = 0;
    let end = arr.length - 1;

    while(mid <= end){

//         while mid <= hi: 
//         if a[mid] == 0: 
//             a[lo], a[mid] = a[mid], a[lo] 
//             lo = lo + 1
//             mid = mid + 1
//         elif a[mid] == 1: 
//             mid = mid + 1
//         else: 
//             a[mid], a[hi] = a[hi], a[mid]  
//             hi = hi - 1
//     return a 
        if(arr[mid] === 0){
            swap(arr , start , mid);
            start++;
            mid++;
        }
        else if(arr[mid] === 1){
             mid++;
        }

        else{
           
            swap(arr , end , mid);
            end--;
        }
    }
    return arr
}

function swap(arr , s , e){
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp
}

sort([1,2,0])