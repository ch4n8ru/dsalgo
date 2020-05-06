/*
    Problem : Given an SORTED array find the first pairs that add upto zero

    find if the negtative of a number is found

    input: a SORTED array

    output: an array containing the pair is it is found 
            else undefined
    
    can the op be figured out: yes,
    1.by using a nested iterator ==> not very efficient
    
    APPROACH USED
    2.using multiple pointers:
    pointers on each end and move them as per the requirement

    As we know they are sorted the largest element is the rightmost and the smallest element is the left most we can check
    if the negative of a number exist by movin the pointer left or right

    for the input [ -5, -2 ,-1 ,3 , 4 ]
    we initialize the pointers at either end at the beginning(could be used for matching problems)

    s => start pointer
    e => end pointer

    [  -5 , -2 , -1 , 1 , 3 , 4 ]               initially   arr[s] + arr[e] = -1  so s++ meaning the negative number is affecting the result too much
        s                     e    

    [  -5 , -2 , -1 , 1 , 3 , 4 ]               arr[s] + arr[e] = 2  so e-- meaning the positive value is not the negative of the number and it is greater
             s                e    

    [  -5 , -2 , -1 , 1 ,  3 , 4 ]               arr[s] + arr[e] = -2  so s++ 
        s                  e    

    [  -5 , -2 , -1 , 1 ,  3 , 4 ]               arr[s] + arr[e] = 1  so e-- 
             s             e    

    [  -5 , -2 , -1 , 1 ,  3 , 4 ]               arr[s] + arr[e] = -1  so s++ 
             s        e    

    [  -5 , -2 , -1 , 1 ,  3 , 4 ]               arr[s] + arr[e] == 0 ==> pair found 
                  s   e    

 



    label important parts:
    function name : zeroPair
    argument : arr

    concrete Examples:

    simple example:
        zeroPair([-1 , 1])  ==> [-1 , 1]

    complex example:
        zeroPair([-1 , -0.85 ,  0 , 0.85 , 1])  ==> [-0.85 , 0.85 ]

    empty input:
        zeroPair([])  ==>  undefined
        zeroPair()  ==>  undefined

    invalid input:
        zeroPair('[-1 , 1]')  ==> undefined


 */

 function zeroPair(arr){
    if(!arr) return undefined 
    /* 
        Assign pointers 
     */

     let startPtr = 0;
     let endPtr = arr.length - 1
    // console.log(startPtr , endPtr)
     /*
        create the array to return 
      */
     let solutionPair = []

      /*
      [-4, -2, -1 ,0 , 3 ,5 ,6 ,7]
        Use the pointer to  move around the array following the below rules:
            if start + end > 0:
                end--
            else
                start++ 
       */
      while(startPtr < endPtr){
        //   debugger
        let sum = arr[startPtr] + arr[endPtr]  
        // console.log(sum)
        if( sum == 0 ){
            solutionPair.push(arr[startPtr])
            solutionPair.push(arr[endPtr])
            return solutionPair
        }
        else if(sum > 1){
            --endPtr
        }
        else if(sum < 1){
            ++startPtr
        }
      }

      return "no pairs"
 }


 /*
    Time complexity O(n)
    space complexity O(1)
 */

console.log(zeroPair([ -5, -2 ,-1 ,3 , 4 ] ))