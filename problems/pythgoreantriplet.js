function pyth(arr){
    sqrArr = arr.map(ele => ele*ele)
    sqrArr = sqrArr.sort((a,b) => a-b);
    
    let n = sqrArr.length
    let low = 0;
    let target = n-1
    let  high = target - 1;
    res = []

    while(target >= 2){
        let currSum = sqrArr[low]+sqrArr[high];
        if(currSum === sqrArr[target]){
             res.push( sqrArr[low] , sqrArr[high], sqrArr[target] )
             target--;
             low = 0
             high = target - 1
             
        }
        else if(currSum < sqrArr[target]){
            low++
        }
        else if(currSum > sqrArr[target]){
            high--
        }

        if(low === high){
            low = 0;
            target--;
            high = target - 1;
        }
    }

    if(res) {
        res = res.map(e => Math.sqrt(e))
        return res
        }
        return []
}




a= [10, 4, 6, 12, 5 ,11,13,3]

pyth(a)