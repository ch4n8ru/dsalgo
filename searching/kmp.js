/* EXPLANATION IN NOTES
*/


function kmpSearch(haystack, needle) {
    let piTable = getPiTable(needle);
    
    let count = 0;
    let i = 0;
    let j = 0;
    let hlen = haystack.length;
    let nlen = needle.length;
    
    while(i < hlen){
        if(haystack[i] == needle[j]){
            i++;
            j++;
        }

        if(j == nlen){
            console.log("match at", i - j)
            count++;
            j = piTable[j-1]
            
        }else if(i < hlen && haystack[i] != needle[j]){
            if(j != 0 ){
                j = piTable[j-1]
            }
            else i++;
        }
    }

    return count
}

function getPiTable(needle) {
    // return [0,0,1,2,0]

    let len = 0;
    let lps = [];
    let i = 1;
    lps[0] = 0;

    while(i < needle.length){
        if(needle[i] == needle[len]){
            len++
            lps[i] = len;
            i++;
        }
        else if (len != 0){
            len = lps[len-1];
            }
        else{
            lps[i] = 0;
            i++
        }
    }
    return lps
}


let haystack = 'ababdabcabababd'
// haystack = ''
let needle = 'abababd'
// needle = 'AAACAAAAAC'

console.log(getPiTable(needle))

// console.log(kmpSearch(haystack , needle)
)