function reverse(arr , start , end){
    while(start < end){
        swap(arr , start , end);
        start++;
        end--;
    }
    return arr
}

function swap(arr , idx1 , idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

function groupReverse(arr , k){
    let len = arr.length;
    let start = 0;
    let end = k - 1;
    if(k > len) return []
    let rotationCount = Math.floor(len / k)
    while(rotationCount > 0){
        reverse(arr , start , Math.min(end , len - 1))
        start += k;
        end += k ;
        rotationCount--
    }
    return arr;
}

groupReverse([910, 1200, 1120, 1130, 1900, 2000 ] , 7)