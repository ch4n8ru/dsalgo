/* ALGORITHM FOR SEARCHING FOR A SUBSTRING IN A STRING

PROBLEM: return the number of occurences of a given substring inside a string
INPUT:  wowomgeromg , omg
OUTPUT: 2

CONCRETE EXAMPLES:

SIMPLE EXAMPLE:
strSearch("abc" , "abc") ==> 1

COMPLEX EXAMPLE:
strSearch("abc bcda jca bc" , "abc") ==> 1

EMPTY INPUT:
return -1

INVALID INPUT:
strSearch("bc" , "abc") ==> -1  str length smaller than substr


/* IMPLEMENTATION */
function strSearch(str, substr) {
        /* Take one character at a time from both strings and compare until end of longer string is reached */
        if(str.length < substr.length) return -1;
        let count = 0;
    
        for(let i = 0 ; i < str.length; i++){
            for(let j = 0;j < substr.length; j++){
                if(str[i+j] != substr[j])  break
                if(j == substr.length - 1) count++
            }
        }
        return count;
    }

console.log(strSearch('lorie loled','lol'))

/* TIME COMPLEXITY O(m(n-m+1) */



