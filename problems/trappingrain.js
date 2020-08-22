function trap(arr){
    n = arr.length;
    let rmax = []
    let lmax = []
    lmax[0] = arr[0];
    rmax[n-1] = arr[n-1];
    trapped = 0;

    for(let i=1 ; i < n; i++ ){
        lmax[i] = Math.max(lmax[i-1] , arr[i])
    }

    for(let i= n-2 ; i >= 0; i-- ){
        rmax[i] = Math.max(rmax[i+1] , arr[i])
    }

    for(let i=0 ; i < n; i++ ){
        trapped += Math.min(lmax[i] , rmax[i]) - arr[i]
    }
    return trapped;
}

trap([1,8,6,2,5,4,8,3,7])