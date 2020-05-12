function binarySearch(arr, key) {
    let first = 0;
    let last = arr.length - 1;
    let mid;

    while (first <= last) {
        mid = Math.floor((first + last) / 2);
        if (arr[mid] == key) return 1
        else if (arr[mid] < key) {
            first = mid;
        }
        else {
            last = mid
        }
    }
}

console.log(binarySearch([1,4,7] , 7))
