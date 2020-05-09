
/* FLATTEN THE ENTRIES IN AN ARRAY */

function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let flatArray = []
    
    for(let i = 0 ; i< arr.length; i++){
      if(Array.isArray(arr[i]))
         flatArray =  flatArray.concat(flatten(arr[i]))
       else flatArray.push(arr[i])
      
    }
      
  return flatArray
  // 
    }
  
  // flatten([1, 2, 3] ) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3