/* 
PROBLEM
Given a SORTED array and a target average find if a pair with the average exists

INPUT:
avgPair([1,2,3,4,5,6,78] , 24)

OUTPUT:
boolean true or false

CAN THE OUTPUT BE DETERMINED:
yes


LABELLING:
arguments: arr , avg
pointers :sptr , eptr


CONCRETE EXAMPLES

SIMPLE EXAMPLE:
avgPair([1,2,3] , 2.5)      ==> true

COMPLEX EXAMPLE:
avgPair([1,2,3] , 2.5)      ==> true  the average is a float with one precision
avgPair([1,2,3,7,7,7,8] , 7)      ==> true

EMPTY INPUT:
avgPair( [] , 2.5)  return false

INVALID INPUT:
avgPair([1] , 2.5)  only one input avg calculation requires two numbers ==> return false

 */


 /* IMPLEMENTATION 
 
 SAME AS ZERO PAIR where check for zero sum is replaced by avg check
 
 */
 function avgPair(arr, avg){
    /* Handle edge cases */
    if(arr.length < 2) return false;
    /* initialize the pointers */
    let sptr = 0;
    let eptr = arr.length - 1;
    /* Move the pointer with the following logic
    while sptr < eptr
        if  if((arr[sptr] + arr[eptr])/2) == avg return true
        else if((arr[sptr] + arr[eptr])/2) > avg eptr--
        else((arr[sptr] + arr[eptr])/2) sptr++
    finally return false

    */
   while(sptr < eptr){
       let calAvg = (arr[sptr] + arr[eptr])/2;

       if(calAvg == avg)  return true

       else if(calAvg > avg) eptr--

       else sptr++
   }

   return false
 }


 let res;
 res = avgPair([1,2,4,9,43] , 5.5)
 res