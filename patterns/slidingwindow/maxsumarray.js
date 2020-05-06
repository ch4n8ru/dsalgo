/* Problem: given an array (unsorted / sorted) find the maximum sum of n numbers
            maxSumArray([1,2,5,3,1,6] , 2)      ==>  8 (5,3)

    input: an array and a num

    output: the maximum sum of num values in the array

    can the op deduced: using 
        *NAIVE METHOD  loop through the array in one loop and in a 
        nested loop calculate the sum and check if its maximum
        
        *IF SORTED find the sum of last num digits and return it

        *SLIDING WINDOW METHOD
        maxSumArray([8,7,4,2,8,2,3,6,7,6] , 3)    expected 19


        [ 8, 7,  4,  2,  8,  2,  3,  6,  7,  6]   initially find sum from 0 to n-1 store it in maxSum 
                                                    maxSum = 8+7+4 = 19 


        start looping from the next element index 1 in the following fashion

        [ 8, 7,  4,  2,  8,  2,  3,  6,  7,  6]             maxSum = 19 (8+7+4) so to find the sum of next num entries 
                                                            add the i+(num-1)th entry and subtract the i-1th entry
                                                            for each iteration compare it with maxSum and modify it 
                                                            as needed

        for array [2,1,3,1,4,5,5,3,8] and num = 4 the windows genrated are

        [ 1, 3, 1, 4 ] ​​​​​           tempsum = 9

        [ 3, 1, 4, 5 ] ​​​​​           tempsum = 13

        [ 1, 4, 5, 5 ] ​​​​​           tempsum = 15

        [ 4, 5, 5, 3 ] ​​​​​           tempsum = 18

        [ 5, 5, 3, 8 ] ​​​​​           tempsum = 21     ==> which is the maximum sum




    
        label important parts:
            function name: maxSumArray
            arguments: srr , sum
    
        CONCRETE EXAMPLES
            simple example: 
            maxSumArray([1,2,3,4,5],2)     sorted array  return the sum of last num digits

            complex examples:
            maxSumArray([1,1,3,1,4,5,5,3,7] , 2)    Multiple num values having the same sum 
                                                    can return the maximum sum as it doesnt matter which
                                                    n digits produce it
            
            empty input:
            maxSumArray([] , 3)         return null

            invalid input:
            maxSumArray([1,3,5,2,4] , 6)    num greater than the array length


 */

 function maxSumArray(arr, num){
     /* Eliminate edge case */
     if(arr.length == 0 || arr.length < num ) return 0
     
     /* Initialize maxSum */
     let maxSum = 0;
     /* Calculate the sum of first n entries */
     for(let i = 0; i < num; i++){
        maxSum += arr[i]
     }

     /* Loop through the array moving the window right */
     let tempSum = maxSum;
     let elements = []
     /* Window size is n  */
     for(let i = 1; i < arr.length - num + 1; i++){
        //  console.log()
         tempSum = tempSum - arr[i-1] + arr[i + num - 1]
        if(tempSum > maxSum){
            // elements = arr.slice(i , i+num);
            maxSum = tempSum;
        }

     }
     return {
            maxSum,
            elements
            }
 }


let result = maxSumArray([41029, 28551, 17959, 27373, 12002, 16485, 98057, 17003, 33091, 78345, 93910, 53399, 13949, 20594, 40630, 70645, 7067, 22134, 38930, 98339, 92226, 7614, 88179, 55053, 21175, 4659, 34710, 74264, 5349, 61421, 22790, 130, 27683, 79414, 22303, 5111, 65606, 47796, 4189, 19526, 72869, 97115, 7724, 15826, 63694, 20378, 45418, 40617, 50348, 89900, 96228, 46712, 28187, 46157, 40171, 52062, 93870, 97318, 68183, 48705, 16728, 26075, 67507, 60498, 3668, 99982, 4779, 33459, 60901, 68621, 73484, 48304, 8115, 50890, 81487, 83578, 38472, 99555, 41492, 89931, 52456, 70290, 38600, 32781, 69191, 25462, 93145, 61768, 5906, 77209, 23539, 98841, 99485, 15096, 6068, 99639, 41238, 56727, 3141, 28467] , 12)


console.log(result.maxSum)