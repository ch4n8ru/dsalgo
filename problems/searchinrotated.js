function search(arr , l , h , k){
    if(l > h) return -1
    let mid = Math.floor((l+h)/2)
    
    if(arr[mid] === k) return mid

    if(arr[l] <= arr[mid]){
        if(k <= arr[mid] && k >= arr[l])
            return search(arr , l,mid-1,k)

        return search(arr , mid+1 , h , k)

    }

    if(k >= arr[mid] && k <= arr[h])
        return search(arr , mid+1 , h , k)
    return search(arr , l , mid-1 , k)
}


let a = [5,1,3]
n =a.length
search( a, 0 ,n-1,3 )