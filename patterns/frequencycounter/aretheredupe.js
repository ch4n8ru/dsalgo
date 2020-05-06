/* COPIED SOLUTION PROBLEM:
    Given multiple arguments find if there are duplicates

    INPUT:
    variable length arguments

    OUTPUT:
    boolean true or false */
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }