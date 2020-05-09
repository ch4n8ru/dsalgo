/* Promblem given a string find the longest substring with unique characters
    
    input : a string "sjhfvaudfbaoiwehdiwehfweqhdqoiw"

    output the longest substring with unique characters

    can the output be deduced:
    *Using sliging window pattern
    
    label important parts:
    functionname longestSubsStr()
    arguments: str


    Concrete examples:
    simple examples:
    longestSubsStr('asdfghjk')   => asdfghjk

    complex example:

    longestSubsStr('asdlkjhgffghASDFASsdfgDFGGHJKL)  mixed case: ignore case convert all to lowercase
    longestSubsStr('asdlkjhasdlkjh')  multiple long strings: return the first occurance


*/



/* IMPLENENTATION 
IN NOTES */
function longestSubsStr(str) {
    /* 
    Create variables for window width
     */
    let windowStart = 0;
    let windowEnd = 0;

    /* Create initial substring and lookup object */
    let maxLen = 0;
    let lookUp = { };
    
   

    // console.log(lookUp);
    let tempLen = maxLen;
    /* move the window with the following logic
       add a new character if it is not unique remove the first item and change in the lookup 
       if it is unique grow the window and change in the lookup
    */
    while (windowEnd < str.length){
        if(lookUp[str[windowEnd]]){
            // duplicate found shreink
            --lookUp[str[windowStart]]
            ++windowStart;
        }
        else{
            // not duplicate
            /* If it enters thi block then it is understood that thr subarray does not have duplicates */
            maxLen = Math.max(maxLen , windowEnd - windowStart + 1)
            if(str[windowEnd])
                lookUp[str[windowEnd]] = ++lookUp[str[windowEnd]] || 1;
            ++windowEnd;
            
        }
    }
    // console.log(lookUp)
    return maxLen
}



/* IMPLEMENTATION 2 */

/* JUMP ANCHORS AS STRINGS HAVE BREAK POINTS WHERE UNIQUENESS ENDS */

function maxLenSub(str){
let anchor = 0;
let seen = {};      //stores the index of the next anchor
let maxLen = 0;
for(let i = 0; i< str.length; i++){
    let currChar = str[i];

    if(seen[currChar]){
        // Duolicate shift anchor
        anchor = Math.max(anchor , seen[currChar])
    }

    /* Not duplicate mark length */
    console.log(anchor , i)
    maxLen = Math.max(maxLen , i - anchor + 1);

    seen[currChar] = i + 1;  /* Stores the index of the next element so the aanchor can jump there */
}

return maxLen
}





// let res;
// res = longestSubsStr('rithmschool')
// res = longestSubsStr('')
// console.log(res);


let len = maxLenSub('thisisawesome')
console.log(len);
