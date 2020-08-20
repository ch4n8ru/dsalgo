/* #kadane's algorithm

Find the longest contiguous subarray that has the greatest sum

-2, 1,-3 , 4 , -1 ,2 ,1,-5,4 ==> 6

*/


var maxSubArray = function(nums) {
    let globalMax = -Infinity;
    let currentMax = 0;
    let index = 0;
    while(index < nums.length){
        let current = nums[index];
        // current max stores the largest sum upto the index i
        /* 
            if currentsum is greater than global sum set current sum as global sum
         */
        currentMax = Math.max(current + currentMax , current);
        if(currentMax > globalMax) globalMax = currentMax
        index+=1
    }
    return globalMax
};
