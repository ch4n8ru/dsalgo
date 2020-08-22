function zigzag(arr){
    let maxValue = arr[0];
    let minIndex = 0;
    let maxIndex = arr.length - 1
    for(let i = 0 ; i < arr.length ; i++){
        maxValue = Math.max(maxValue , arr[i]  )
    }
    maxValue += 1;
    for(let i = 0 ; i < arr.length ; i++){
        if(i % 2 === 0 ){
            arr[i] += (arr[maxIndex] % maxValue) * maxValue
            maxIndex--;
        }
        else{
            arr[i] += (arr[minIndex] % maxValue) * maxValue;
            minIndex++
        }
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = Math.floor(arr[i] / maxValue)
    }
    return arr
}

zigzag([1,2,3,4,5,6])
