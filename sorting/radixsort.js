function radixSort(arr) {
    let maxDigitsCount = mostDigits(arr);
    for (let k = 0; k < maxDigitsCount; k++) {
        let numbersBucket = Array.from({
            length: 10
        }, () => []);
        for (let e of arr) {
            let currDigit = digitAt(e, k)
            numbersBucket[currDigit].push(e)
        }
        arr = [].concat(...numbersBucket)
    }
    return arr
}


/* helper functions */
function digitAt(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

function digitsCount(number) {
    if (number == 0) return 1
    return Math.floor(Math.log10(Math.abs(number))) + 1

}

function mostDigits(arr) {
    let maxDigits = 0
    for (let e of arr) {
        maxDigits = Math.max(maxDigits, digitsCount(e))
    }
    return maxDigits
}

let bigArray = []
for (let i = 0; i < 10000000; i++) {
    bigArray.push(Math.random() * -10000000)
}

// console.log(bigArray)
let t1 = performance.now()
/*
    code invocation here
*/
console.log(radixSort(bigArray))
let t2 = performance.now()

console.log("time elapsed " + (t2 - t1) / 1000)

// digitAt(1,2)

/* TIME COMPLEXITY:
O(nk)

k is the max wordsize

SPACE COMPLEXITY
O(n+k)
*/