function leaders(arr){
    let lastLeader = -1;
    leaders = []

    for(let i = arr.length - 1; i >=0 ; i--){
        if(arr[i] >= lastLeader){
            lastLeader = arr[i];
            leaders.push(arr[i])
        }
    }
    console.log(leaders)
}

leaders([7,4,5,7,3])