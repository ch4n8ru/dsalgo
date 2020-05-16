/* 
*Title: Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

*Difficulty: Easy

*Tags: Binary Search
*/


/* SOLUTION

Given a number search for it in an SORTED array and return index if found else return its expexted position

INPUT: Sorted array  , num
OUTPUT: Index if present or expected position

EXAMPLES:
EASY:
[1,2,3,4,6] , 5  ==> 4

COMPLEX:
[1,4,7,89,92 , 94] , 93  ==> 5

EMPTY INPUT :
return -1

*/


var searchInsert = function(nums, target) {
    /* perform binary search and return index */
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while(start <= end){
        mid = Math.floor((start+end)/2)
        // console.log(start,mid,end)
        if(nums[mid] == target) return mid;
        else if(nums[mid] > target) end = mid - 1
        else if(nums[mid] < target) start = mid + 1
    }
    return nums[mid] > target?  mid : mid + 1
};

console.log(searchInsert( [1,3,5,6], 7 ))