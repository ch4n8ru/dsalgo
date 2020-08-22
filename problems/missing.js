function missing(arr){
    for(let i = 0 ; i < arr.length; i++ ){
//         console.log(i ,arr[i])
        if( (i + 1) != arr[i]  )
        return i + 1        
    }
}

missing([1, 2, 3, 5])