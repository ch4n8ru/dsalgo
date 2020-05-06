/*
    Problem: given a SORTED array find the unique numbers in the array

    input : a sorted array with maybe repeated values

    output: the count of unique values in the array

    can the op be deduced :
        1.using frequency counter : collect the numbers and their frequencies as the key value
         and finally return the key's length
        2.Using multiple pointers starting next to one another
        3.if UNSORTED loop through the array while maintaining multiple pointers and if two values are same
            remove the value out of the array by splicing finally return the count of the array
          
    APPROACH USED

    1:WITH COUNT VARIABLE ( VERY HACKY )
        ==> set count to zero initially and pointers to 0 and 1 if arr.length = 1 return 1
        ==> loop through the array with the following condition

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] false; count++;  first = second; second++   count =1
            f   s

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] true; second++
                f   s

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] true; second++
                f       s

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] true; second++
                f           s

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] true; second++
                f               s

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] false; count++;  first = second; second++     count = 2
                f                   s

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] false; count++;  first = second; second++     count = 3
                                    f   s

        [   1,  2,  2,  2,  2,  2,  4,  5,  6   ]        arr[f] == arr[s] false; count++;  first = second; second++     count = 4
                                        f   s

        
        finally :
                if arr[s] == arr[f]        return count
                else                       return count + 1

    2. WITHOUT COUNT VARIABLE
    ==> use the array to build the unique numbers list

    loop while( s < arr.length)
        
    [   1,  1,  2,  3,  3,  4]          arr[f] == arr[s]  true   s++
        f   s   

    [   1,  1,  2,  3,  3,  4]          arr[f] == arr[s]  false  f++;   arr[f] = arr[s];    s++
        f       s

    [   1,  2,  2,  3,  3,  4]          arr[f] == arr[s]  false  f++    arr[f] = arr[s];      s++
            f       s    

    [   1,  2,  3,  3,  3,  4]          arr[f] == arr[s]  true   s++
                f       s

    [   1,  2,  3,  3,  3,  4]          arr[f] == arr[s]  false  f++;   arr[f] = arr[s];     s++
                f           s

    [   1,  2,  3,  4,  3,  4]          arr[f] == arr[s]  true  f++ s++
                    f       s    
    
                    return f + 1    The index f points to the last unique element that was collected and since array indices start at 0 ,
                                    f + 1 is returned


    label important parts
    function name :  countUniqueVal

    Concrete Examples:
        simple example:
            countUniqueVal([1,2,3,4])  => 4
        complex example
            countUniqueVal([1,2,2,2,2,2,4,5,6])  => 5
        empty input:
            countUniqueVal([]) => undefined
        invalid input:
            countUniqueVal([1,3,2])    unsorted array
            countUniqueVal('123')    not array        
 */

function countUniqueVal(arr){
    
    if(arr.length == 0) return 0
    // set indices
    let first = 0
    let second = 1

    // setup count variable
    let count = 0

    /* Loop thru the array with the following condition
        while f < s and s < arr.length  
        if ars[f] == arr[s]
            s++
        else if  arr[f] != arr[s]
            count++
            f = s ;
            s++;
    */


//    while(first < arr.length){                                   
//        if(arr[first] == arr[second])
//             second++
                                                            /* REFACTORED BELOW */
//         else {
//             count++;
//             first = second;
//             second++
//         }
//    }
//      if (arr[first] != arr[second])
//              ++count

   while((second < arr.length)){  
       console.log('loop')                               
       if(arr[first] != arr[second]){    
            count++;
            first = second;
        }
            second++
   }

   if (arr[first] != arr[second])
        ++count
   return count
} 

/* Time complexity O(n)
    space complexity O(1) 
 */
let res = countUniqueVal([1])
// res = countUniqueVal([1,2])

console.log(res)

/* 2 APPROACH WIYHOUT USING A COUNT VARIABLE */

function collectUniqueVal(arr){
  if(arr.length == 0) return 0

    /* Assign pointers */
    let first = 0;
    let second = 1

// if(first == second) return 1
/* Loop thru the array with the following 
    while second < arr.lenght
        if arr[f] == arr[s]
            s++
        else arr[f] = arr[s]
            s++
    endloop
    return s++  length is one more than last index
*/

    while(second < arr.length){
        if(arr[first] != arr[second]){
            arr[++first] = arr[second]
        }
        second++;
    }
    return ++first
}
/* Time complexity O(n)
    space complexity O(1) 
 */
let result = collectUniqueVal([1,1,1,2,3,3]) 
console.log(result)