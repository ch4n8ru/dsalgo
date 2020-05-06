/* 
    Problem : find if a given string is an anagram of a string 

    Input: two strings str1 , str2

    Output: boolean

    Can the o/p be deduced from the input : yes using
    1.charecter frequency comparision
    2.generating all possible anagrams and storing it in an object and check if the key is present
    3.iterating over both arrays and check if the char in one array is in other
        wont work for anagrams with repeating charecters

    Label important parts:
        arguments : str , strToCheck

    Concrete Examples:
        Simple case:
            isAnagam('a' ,'a') true
            isAnagam('ab' ,'ba') true
        
        complexCase
            isAnagram('test string' , 'ttsstrngi') should space be considered : false , consider as invalid input
            isAnagram('hello' , oLLhe) varying case should be considered false
            

        Empty Input:
            isAnagram('' , '' )
            isAnagram('sad' , )
            isAnagram( , 'das') return null
        
        Invalid Input:
            isAnagram('sad' , 'da') strings with unequal length
            isAnagram('test' , 123) inputs with numbers or other characters
            isAnagram('test' , 'a123') inputs with numbers or other characters
            isAnagram('ello' , 'e lo') same length but with space


*/

function isAnagram(str , strToCheck){
    // if either string is empty OR unequal OR invalid string OR contains space return null
    if((str.length != strToCheck.length) ||
    (str.indexOf(' ') > -1) &&
    (strToCheck.indexOf(' ') > -1)  
    ) return 'not anagram'
    
    // read each character and store its frequency in object strobj
    let strObj = {}

    for (const char of str) {
       strObj[char] = ++strObj[char] || 1
    }
    
    // read each character and store its frequency in object strToCheckobj
    let strToObj = {}

    for (const char of strToCheck) {
       strToObj[char] =  ++strToObj[char] ||  1
    }

        
    // iterate through the strobj object and see if the frequency of character is same as in another object 
    for (const key in strObj) {
        // console.log(key)
        if (strObj[key] != strToObj[key]) {
            return 'not anagram'
        }
    }
    
    return 'anagram'
}

console.log(isAnagram('achu' , 'uach'));
/*
    Time Complexity O(n)
 */

//  console.log(('' && 'as') || true )




/*
    Alternate solution
    time complexity O(n)

    Use one lookup table and reduce count in lookup table as charecter is matched

 */

 function validAnagram(str , strToCheck){
     if(str.length != strToCheck.length) return false

     let lookup = {}

     for (const char of str) {
         lookup[char] = ++lookup[char] || 1
     }

     for (const char of strToCheck) {
         /* Instead of comparing the occurrence count in two objects reduce the count by one in lookup so
            that it will return false if an character which is not present in lookup is queried or the query returns a zero if occurrance of a 
            character in strToCheck more than in lookup object

            ('fred' , 'dfee'):
            Initially:
            lookup{ f:1 , r:1 , e:1 , d:1}

            At each iteration of StrTocheck: condition where a char occurs more than once
            'd'                     lookup{ f:1 , r:1 , e:1 , d:0}
            'f'                     lookup{ f:0 , r:1 , e:1 , d:0}
            'e'                     lookup{ f:1 , r:1 , e:0 , d:0}
            'e'                     lookup{ f:1 , r:1 , e:0 , d:0}    ==> returns falsy value 0 as the count of e in lookup is zero

         */
         if(!lookup[char]){
             return false
         }else{
            --lookup[char]
         }
     }
     return true
 }

 console.log(validAnagram('dfer' ,'feed'))