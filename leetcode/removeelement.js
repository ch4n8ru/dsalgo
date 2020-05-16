/*
*Title:Given an array nums and a value val, remove all instances of that value in-place and return the
new length.

*Difficulty:Easy

*Tags: #Array , #MultiplePointers , #inplace , #outoforder
 */

/* PROBLEM : EASY
Given an array nums and a value val, remove all instances of that value in-place and return the
 new length.

Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. 
It doesn't matter what you leave beyond the new length. 



EXAMPLES:

Example 1:
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, 
with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.

*/

/* SOULTION

STATEMENT:move the elements which match val to the end of the array

INPUT:  array nums , int val
OUTPUT: length of array after removing the val in place

CONCRETE EXAMPLES:

SIMPLE EXAMPLE:
removeElement([1,3,2] , 3)  ==> 2
removeElement([1,3,2,3,3,3,3,3,3] , 3)  ==> 2

COMPLEX EXAMPLE:
removeElement([1,2,4,6,1,2,4,3,7,1,2,3,1,2,1] , 1) ==> [2,4,6,2,4,3,7,2,3,2,1,1,1,1,1]  ==> 10

ZERO INPUT:
NO zero input

INVALID INPUT :
NA

EDGE CASES:
removeElement([1] , 1) if both same return 0
 */



/* IMPLEMENTATION */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    /* handle edge cases */
    if (nums.length == 1) return nums[0] == val ? 0 : 1

    /* create initial pointers */
    let sptr = 0;
    let eptr = 0;
    let isMatch = false
    /* run thru the array if element[s] matches val swap */
    while (eptr < nums.length) {
        if (nums[sptr] == val) {
            if (nums[eptr] != val) {
                let temp = nums[sptr]
                nums[sptr] = nums[eptr]
                nums[eptr] = temp;
            }
            else ++eptr;
        } else {
            ++eptr;
            ++sptr;
        }

    }

    /* if there is no matches the sptr moves with eptr to the end */
    return sptr == eptr? nums.length:sptr 
      
};

/* Solution 2 similar to solution 1 but use endpoiter to check for equality
*/
var removeElement2 = function (nums, val) {
    let sptr = 0;
    let eptr = 0;

    while(eptr < nums.length){
        if(nums[eptr] != val){
            nums[sptr] = nums[eptr]
            ++sptr
        }
        ++eptr
    }
    return sptr
}

/* SOLUTION 3 */
/* EXPLANATION

ONLY USE IF ORDER OF OTHER ELEMENTS IS NOT TO BE MAINTAINED

if duplicate is found move it to last and shrinK the array


nums = [1,3,4,1] val = 1

sptr = 0

ARRAY IS NOT MODIFIED ONLY THE RANGE IS REDUCED

1,  3,  4,  1       len = 4     num[s] == val; true ==> nums[s] = nums[len - 1]; len--
s

1,  3,  4           len = 3     num[s] == val; true ==> nums[s] = nums[len - 1]; len--
s

4,  3               len = 2     num[s] == val; false; sptr++
s

4,  3               len = 2     num[s] == val; false , end of array reached return len
    s

*/
var removeElement2 = function (nums, val) {
    let sptr = 0;
    let len = nums.length;

    while(sptr < len){
        if(nums[sptr] == val){
            nums[sptr] = nums[len - 1 ]
            len--;
        }
        else  sptr++

    }

    return len
}

let nums = [5,5];
nums =[0,1,2,2,3,0,4,2]
console.log(removeElement2(nums,2 ))
console.log(nums)
