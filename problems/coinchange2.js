function coinChange(coins , amount){
    
    let combinations = Array(amount + 1).fill(0);
    
    combinations[0] = 1;
    for(let c = 0; c < coins.length ; c++){
    for(let i = 1; i<combinations.length; i++){
            if(coins[c] <= i)
                combinations[i] += combinations[i-coins[c]]
        }
    }
    console.log(combinations)
    return combinations[amount]

}

coinChange([1,2] , 4)
