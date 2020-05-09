/* PROBLEM : 
check if the given string is a palindrome recursively


INPUT:
a string str

OUTPUT:
Boolean true or false

CONCRETE EXAMPLE:

isPalindrome('a') true
isPalindrome('abba') true
isPalindrome('aba') true

''

*/


function isPalindrome(str){
    if(str.length <= 1) return true
    return str[0] == str[str.length - 1] * isPalindrome(str.slice(1 , -1))
}

/* REFACTORING TO OPTIMIZE */
function isPalindrome(str){
    if(str.length <= 1) return true
    if(str.length == 2) return str[0] == str[1]
    if (str[0] == str[str.length - 1]) return isPalindrome(str.slice(1 , -1))
    return false;
}