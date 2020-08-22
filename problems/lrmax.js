function lrmax(arr){
    let n = arr.length
    let lmax = [arr[0]];
    let rmin = [];
    rmin[n-1] = arr[n-1];

    for(let i = 1; i < arr.length; i++){
        lmax[i] = Math.max(lmax[i - 1] , arr[i])
    }

    for(let i = arr.length - 2; i >= 0; i--){
        rmin[i] = Math.min(rmin[i + 1] , arr[i])
    }

    for(let i = 0 ; i < n-1; i++){
        if(arr[i] === lmax[i] && arr[i] === rmin[i])
        return arr[i]
    }

    console.log(lmax , rmin)
    return -1 
}

lrmax([4,2,5,7])