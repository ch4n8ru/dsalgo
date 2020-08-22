function ignorestr(str){
    let res = '';
    let ignoreHash = {}
    let i = 0
    while(i < str.length){
        if(!ignoreHash[str[i].toUpperCase()]){
            res+=str[i]
            ignoreHash[str[i].toUpperCase()] = true;
        }
        else{
            ignoreHash[str[i].toUpperCase()] = !ignoreHash[str[i].toUpperCase()]
        }

        i++;
    }




    return res;
}


str = "Geeks for geeks"
// Geks fore



ignorestr(str)