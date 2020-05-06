/* PROBLEM
Given an array and a num value find the shortest CONTINUOUS subarray that is equal to or greater than the num value

INPUT:
an array arr and a num value

OUTPUT:
the length of the shortest continuous subarray that sums to the num value

CANT THE OUTPUT BE DEDUCED:
yes

LABEL IMPORTANT PARTS:
functionname minlenSubArray()
windowtrackers : windowstart , windowend  points to the elements which are in the window beginning and end

CONCRETE EXAMPLES:
simpleexample
[1,2,3,4,5]  ,5 ==> 1 

complex example:
[6,3,3,1,4,2,1] ,7 ==>3 [3,3,1] and not [6,1] THE SUB ARRAY NEEDS TO BE CONTIGUOS
[5,3,2,5,4,9]  ,9 ==> 1 [9]

EMPTY INPUT
[]  ,9 ==> undefined

INVALID INPUT
NA
*/

/* IMPLEMENTATION 
<--in notes-->
*/

function minlenSubArray(arr, num) {
    if (!arr) return undefined

    /* Create the window and minsum varaiables*/
    let windowStart = 0;
    let windowEnd = 0;
    let minlen = Infinity;
    let winSum = arr[0]


    /* Use the sliding window to anchor at each number and finding the subarray length that can add to num and finally return
    the shortest subarray
    */
    let tempLen = minlen
    while(windowEnd < arr.length){
        if(winSum >= num){
            console.log(windowEnd, windowStart );
            
            tempLen = windowEnd - windowStart + 1;
            winSum -= arr[windowStart];
            ++windowStart;
            minlen = Math.min(minlen , tempLen)
        }
        else{
            ++windowEnd;
            if(windowEnd)
                winSum += arr[windowEnd]           
        }
    }

    if(minlen == Infinity)
        return 0
    return minlen


}






let res ;
res = minlenSubArray([2,3,1,2,4,3], 7)
console.log(res)