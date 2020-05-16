/* THE ONLY SEA;\RCH FOR UNSORTED ARRAYS
TIME COMPLEXITY:
BEST CASE:O(1) key is first element
WORST CASE: O(N) key not found or key is last element
*/

function linearSearch(arr ,key ){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key)   return i;
    }
    return -1
  }