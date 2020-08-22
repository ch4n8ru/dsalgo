function subArray(arr , sum){
    //     let prefixSum = [];
    //     found = false;
    //     prefixSum[0] = arr[0]
    //     for(let i = 1; i < arr.length; i++){
    //         prefixSum[i] = arr[i] + prefixSum[i-1];
    //     }
    //     console.log(prefixSum)
    
    //     for(let j =0;j<prefixSum.length; j++){
            
    //     }
    
        let windowStart = 0;
        let windowEnd = 0;
        let windowSum = arr[0];
        while(windowEnd < arr.length){
            if(windowSum < sum){
                windowEnd++;
                windowSum = windowSum + arr[windowEnd];
            }
            if(windowSum > sum){
                windowStart++;
                windowSum = windowSum - arr[windowStart - 1]
            }
            if(windowSum === sum){
                return [windowStart + 1 , windowEnd + 1]
            }
        }
        return false;
    }
    
    subArray([1 ,2 ,3 ,4, 5 ,6 ,7 ,8 ,9 ,1,0] , 15)