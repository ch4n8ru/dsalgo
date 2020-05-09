/* Capitalize the first letter of eacch string in an array */

function capitalizeFirst (arr) {
    let capArray = [];
  // add whatever parameters you deem necessary - good luck!
  if(arr.length == 0) return arr
  
  return capArray.concat([arr[0][0].toUpperCase() + arr[0].slice(1)] , capitalizeFirst(arr.slice(1)))

}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
