/*
*Title:Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

*Difficulty:Easy

*Tags: #stringmatch , #naivestringsearch ,#haystack
 */

 /* SOLUTION
 Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

IMPLEMENT NAIVE STRING SEARCH

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 */

/* IMPLEMENTATION
 */

 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length == 0) return 0
    
    for(let i = 0; i < haystack.length;i++){
        for(let j = 0 ; j < needle.length ; j++ ){
            if(haystack[i+j] != needle[j]) break
            if(j == needle.length - 1) return i
        }
    }
    return -1
};


/* IMPLEMENTATION USING BUILIN FUNCTIONS */
var strStr = function(haystack, needle) {
    if(!needle) return 0
    for(let i = 0 ; i <= (haystack.length - needle.length);i++){
        console.log(haystack.slice(i , i+needle.length ))
        if (haystack.slice(i , i+needle.length) == needle) return i
    }
    return -1
}

console.log(strStr('hello' , 'll'))