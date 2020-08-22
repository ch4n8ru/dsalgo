function swapToEqual(arr , arr2){
    arr = arr.sort();
    arr2 = arr2.sort();
    
    let sum1 = 0
    let sum2 = 0

    for(let i=0;i<arr.length;i++)
        sum1+=arr[i]

    for(let i=0;i<arr2.length;i++)
        sum2+=arr2[i]
    
    let totDiff = Math.floor((sum1 - sum2)/2);
    
    let i = 0;
    let j = 0;
    while(i < arr.length && j < arr2.length){
//         console.log(totDiff)
        if(arr[i] - arr2[j] === totDiff) return [arr[i] , arr2[j]]

        else if(arr[i] - arr2[j] < totDiff) i++
        else  j++
    }
}

A=[5,7,4,6] 
B=[1,2,3,8] 

swapToEqual(A , B)