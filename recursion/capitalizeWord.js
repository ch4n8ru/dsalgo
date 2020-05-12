/* "Write a recursive function called capitalizeWords. Given an array of words, 
return a new array containing each word capitalized." */

function capitalizedWords (words) {
    // add whatever parameters you deem necessary - good luck!
    let capArray = []
    if(words.length == 0) return words
    return capArray.concat([words[0].toUpperCase()]  , capitalizedWords(words.slice(1)))

  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  words = ['recur']
 console.log( capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']