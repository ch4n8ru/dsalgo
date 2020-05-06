/*
    PROBLEM:
    Given multiple arguments find if there are duplicates

    INPUT:
    variable length arguments

    OUTPUT:
    boolean true or false

    LABELLING:
    function name :areThereDupe
    arguments variable length ==> collect using ... or arguments()

    METHOD:
    *Naive Linear chech
    *convert to set and compare input and set length
    *Frequencycounter   ==> addition operation to build lookup table
    *Multiple pointers

    for input 1,3,5,6,8,9,5
    do the following while the firstptr f < arguments.length - 1  f should only go upto the last before element

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false => s == arg.length - 1 false  s++
    f   s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false ==> s == arg.length - 1 false  s++
    f       s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false ==> s == arg.length - 1 false  s++
    f           s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
    f               s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
    f                   s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 true  f++ ; s= f+1
    f                       s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
        f   s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
        f       s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
        f           s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
        f               s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 true ==> f++ ; s=f+1
        f                   s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
            f       s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  false  ==> s == arg.length - 1 false  s++
            f           s

    1,  3,  5,  6,  8,  9,  5       arg[f] == arg[s]  true  return true break
            f               s



    CONCRETE EXAMPLES:
    SIMPLE EXAMPLE:
    areThereDupe(1,2,3)     :false
    areThereDupe(1,2,2)     :true

    COMPLEX EXAMPLES:
    areThereDupe('1' ,1 ,'a' ,'b') /strings and numbers ==> use === check
    areThereDupe(' ' ,1 ,'a' ,' ','b')  include multiple spaces  IGNORE FOR NOW
    areThereDupe(,1 ,'a' A')  Mixed cases  treat as unique

    EMPTY INPUT:
    areThereDupe('')      return false

    INVALID INPUT:
    areThereDupe([])   /pass arrays or objects


 */

function areThereDupe(...args) {
    let startPtr = 0
    let endPtr = 1
    while (startPtr < arguments.length - 1) {
        if (arguments[startPtr] === arguments[endPtr]) {
            return true
        } else {
            if (endPtr == arguments.length - 1) {
                ++startPtr
                endPtr = startPtr + 1
            } else
                endPtr++
        }
    }
    return false;
}
/* TIME COMPLEXITY : O(n)
    SPACE COMPLEXITY: O(1)  ignore arguments as it is the input
 */
let res
res = areThereDupe('a', 'a', 'c')
res = areThereDupe(1,1)
console.log(res);

/* ALTERNATE MULTIPLE POINTER SOLUTION SORT FIRST AND GO LINEAR */
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }




/* SOLUTION USING SET */
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }