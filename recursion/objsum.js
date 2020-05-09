/* "Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects." */

function nestedEvenSum (obj) {
    // if(Object.keys(obj).length == 0) return 0
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  Object.keys(obj).forEach(key => {
      if(typeof(obj[key]) == 'object'){
          sum += nestedEvenSum(obj[key])
          
      }else if(typeof(obj[key]) == 'number'){
          if((obj[key]) % 2 == 0){
              sum+=obj[key]
          }
      }
  })
  return sum

}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10