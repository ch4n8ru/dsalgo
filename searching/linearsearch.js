function linearSearch(arr ,key ){
    // add whatever parameters you deem necessary - good luck!
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key)   return i;
    }
    return -1
  }