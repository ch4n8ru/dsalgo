/* HELPER RECURSION IMPLEMENTATION */

function productOfArray(arr){
    let prod = 1
    function helper(arr){
        if(arr.length == 0) return 1
         prod *= arr[0]
        helper(arr.slice(1))
    }
    helper(arr)
    return prod;
}




productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


/* PURE RECURSION IMPLEMENTATION */

function prodArray(arr){
    if(arr.length == 0) return 1
    return arr[0] * prodArray(arr.slice(1))
}


prodArray([1,2,3]) // 6