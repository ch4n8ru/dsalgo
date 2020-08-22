function eq(arr){
    let presum = []

    let leftsum = 0;

    presum[0] = arr[0];

    

    for (let i = 1 ; i < arr.length; i++){
        presum[i] = presum[i-1] + arr[i];
//         console.log(i)
    }
    maxsum = presum[presum.length - 1]
    for(let i = 0 ; i < arr.length ; i++){
        maxsum = maxsum - arr[i];
           if(maxsum === leftsum) return i
        leftsum+= arr[i]
    }
    return -1
}

eq([1,3,5,2,2])