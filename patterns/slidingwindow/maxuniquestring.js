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

function longestSubsStr(str) {
    /* 
    Create variables for window width
     */
    let windowStart = 0;
    let windowEnd = 0;

    /* Create initial substring and lookup object */
    let maxLen = 0;
    let lookUp = {};
   

    // console.log(lookUp);
    let tempLen = maxLen;
    /* move the window with the following logic
       add a new character if it is not unique remove the first item and change in the lookup 
       if it is unique grow the window and change in the lookup
    */
   let nextChar
    while (windowEnd < str.length){
        
        // console.log(nextChar);/
        // console.log(lookUp);
        nextChar = str[windowEnd]
        if(lookUp[nextChar] > 1){
            console.log(nextChar + ' dup');
            lookUp[str[windowStart]] -= 1
            ++windowStart;

            
        }
        else{
            
            ++windowEnd;
            // if(str[windowEnd + 1])
           
            nextChar
            lookUp[nextChar] = ++lookUp[nextChar] ||   1;
        }
    

    }

}

let res;
res = longestSubsStr('rithmschool')