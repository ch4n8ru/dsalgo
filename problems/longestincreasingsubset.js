function longesInc(arr){
    n = arr.length;
    let hashArray = Array(n).fill(1);

    
    let j = 1;

    while(j<n){
        let i = 0;
        while(i < j){
            if(arr[i] < arr[j]){
                hashArray[j] = Math.max(hashArray[j] , 1+hashArray[i])
            } 
            i++;
        }
        j++;
    }

    return hashArray[n-1]
}


longesInc([3])