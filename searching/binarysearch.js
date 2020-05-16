/* ONLY FOR SORTED ARRAYS
TIME COMPLEXITY:
BEST CASE: O(1)
WORST CASE / AVERAGE CASE: O(logN)

logN:
for an array of 16 length to find or to confirm the element is not present it requires 4 ops
for an array of 32 length to find or to confirm the element is not present it requires 5 ops

==> log2(16) = 4
==> log2(32) = 5

hence the time is logN which is very efficient
*/


function binarySearch(arr, key) {
    let first = 0;
    let last = arr.length - 1;
    let mid;

    while (first <= last) {
        mid = Math.floor((first + last) / 2);
        if (arr[mid] == key) return mid
        else if (arr[mid] < key) {
            first = mid + 1;
        }
        else {
            last = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1,4,5,7] , 1))
