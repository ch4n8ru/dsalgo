/*PROBLEM : Given two numbers find if the two of them have the same frequency of digits
(like anagram of digis)

input : two numbers num1 , num2
output : true or false

can the op be deduced:

*Using Frequency counter pattern
IMPLEMENTATION SAME AS anagram.js

label important parts:
function name :sameFreq
arguments: num1 , num2
lookuptable:numObj1 , numObj2

CONCRETE EXAMPLES:
1.Basic examples:
    sameFreq(123,321)
2.Complex Example
    sameFreq(600,321)  //same sum of digits but different digits
    sameFreq(22,222)    //same digits different frequency
    sameFreq(123,3.21) /return true

3.Empty input
    sameFreq(321) //return 0
4.invalid input:
    sameFreq(-123,321) //negative numbers

    
 */

function sameFreq(num1 , num2){
    /* Create lookup table */
    let numLookup = {}
    while(num1 > 0){
        let digit = num1% 10;
        numLookup[digit] = ++numLookup[digit] || 1;
        num1 = Math.floor(num1/10);
    }
    /* loop through the other numbers digits and check frequency */
    while(num2 > 0){
        let digit = num2%10;
        if(!numLookup[digit])
            return false
        else
            numLookup[digit]-=1
        num2 = Math.floor(num2/10)
    }
    return true;
}





let res = sameFreq(123,321)
console.log(res)