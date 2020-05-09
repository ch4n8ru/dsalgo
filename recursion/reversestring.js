/* PROBLEM
Write a recursive function that will return the reverse of a string provided
    

STRINGS ARE IMMUTABLE

INPUT: a string

OUTPUT: reverse of the given string

CONCRETE EXAMPLE:
rev('sbc')  ==> cbs

rev('sdrtttc')  ==> ctttrds

rev('')     return ''

BASE CASE(S):
''      ==> empty string
*/


/* HELPER RECURSION IMPLEMENTATION */
function rev(str){
    let revstr = '';

    function helper(str){
        if(!str) return ''
        revstr += str[str.length-1];
        helper(str.slice(0 ,- 1))
    }
    helper(str)
    
    return revstr
}

/* PURE RECURSION */

function revRec(str){
    let len = str.length
    if(len == 0) return ''
    return revRec(str[len]) + revRec(str[len - 1])
}
