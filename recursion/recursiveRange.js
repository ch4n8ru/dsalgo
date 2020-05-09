/* PROBLEM write a function that takes in a number and returns the sum upto it */




function recursiveRange(num){
   if(num == 0) return 0
   return num + recursiveRange(num - 1)
}


// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 