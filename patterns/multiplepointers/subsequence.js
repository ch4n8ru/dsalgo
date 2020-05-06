/* PROBLEM
Given two strings check if the characters in the  first string is present in the second string without 
changing the order

INPUT:
two strings : isSubSeq('hello' , 'hello world')

OUTPUT:
Boolean true or false

Can the output be deduced?
New approach required

LABEL IMPORTANT PARTS
function name: isSubSeq
pointers trackPtr , checkPtr

CONCRETE EXAMPLES:
SIMPLE EXAMPLE:
isSubSeq('hello' , 'hello world')   ==> true

COMPLEX EXAMPLE:
isSubSeq('abc' , 'ajbbbbhgachbeoc') characters spread across  ==> true
isSubSeq('abc' , 'acb')  ==> false;

EMPTY INPUT
isSubSeq('hello' , '')
isSubSeq('' , 'VSDKJ')  return false

INVALID INPUT
isSubSeq('hellokk' , 'hello')  ==> test string is longer than original string



*/

/* IMPLEMENTATION */
// take the strings

/*  
    ('abc' , 'abracadabra')
    teststr = abc
    str = abracadabra

    initialize two pointers trackPtr and checkptr

    abc         abracadabra initally
    c           t

    abc         abracadabra         if testStr[c] == str[t] true c++; if c == testStr.length - 1 false; t++
     c           t

    abc         abracadabra         if testStr[c] == str[t] true c++; if c == testStr.length - 1 false; t++
      c            t

    abc         abracadabra         if testStr[c] == str[t] false c++
      c             t

    abc         abracadabra         if testStr[c] == str[t] true c++; if c == testStr.length - 1 true return true
      c             t
    
 */

function isSubSeq(testStr , str){
/* Handle edge cases */
if(!testStr || !str || testStr.length > str.length) return false;

/* create pointers */
let trackPtr = 0;
let checkPtr = 0;
/* Use multiple pointers 
while trackPtr < str.length
if(teststr[checkPtr] == str[trackPtr])  checkPtr++; trackptr++
else  trackptr++

finally if checkptr == tesStr.length - 1 return true;
else return false

*/

while(trackPtr < str.length){
    console.log(trackPtr);
    
    console.log(str[trackPtr],testStr[checkPtr]);
    
    if(str[trackPtr] == testStr[checkPtr])  ++checkPtr

    if((checkPtr == testStr.length - 1))
        return true

++trackPtr;

}
return false
}

let res = isSubSeq('abc' , 'abc')
console.log(res);