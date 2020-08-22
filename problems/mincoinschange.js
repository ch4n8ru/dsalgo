function minCoinChange(coins , amount){
    max = coins.sort((a,b) => b-a)[0]
    let combinations = Array(amount + 1).fill(max + 1);
    
    combinations[0] = 0;

    for(let i = 1; i<combinations.length; i++){
        for(let c = 0; c < coins.length ; c++){
            if(coins[c] <= i)
                combinations[i] = Math.min(1 + combinations[i-coins[c]] , combinations[i])
//             
        }
        combinations[i] === max ? 0 : combinations[i]
    }
    console.log(combinations)
    return combinations[amount]

}

minCoinChange([10, 2, 3, 4, 5, 9, 7, 8] , 23)