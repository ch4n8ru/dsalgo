function choco(arr , m){
    const intcmp = (a , b) => a-b;
    arr.sort(intcmp);

    let n = arr.length;
    let start = 1;
    let end =  m;
    let mindiff = arr[m-1] - arr[0]

    while(end < n){
        mindiff = Math.min(mindiff , arr[end] - arr[start]);
        start+=1;
        end+=1
    }

    return mindiff

}

choco([7 ,3 ,2 ,4 ,9 ,12 ,56] , 3)