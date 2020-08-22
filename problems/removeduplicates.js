function removeup(str){
    let lookup = {}

    for(let i = 0 ;i< str.length; i++){
        lookup[str[i]] = ++lookup[str[i]] || 1;
    }
    let res = ''
    for(let i = 0 ;i< str.length; i++){
        let occurance = lookup[str[i]];
        if(occurance > 0){
            lookup[str[i]] = -1;
            res+=str[i]
        }
    }
    return res;
}

c = "geeks for geeks"
removeup(c)