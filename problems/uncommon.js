function uncommon(str1 , str2){
    let charMap = Array(26).fill(0)

    let normalize = 'a'.charCodeAt()
    for(let char of str1){
        let idx = char.charCodeAt()  -  normalize
        charMap[ idx] = 1
    }

    for(let char of str2){
        let idx = char.charCodeAt()  -  normalize
        if(charMap[ idx ] === 1)
            charMap[idx] = -1
        else if(charMap[ idx ] !== -1)
             charMap[ idx] = 2       
    }

    
    let res = ''
    for(let i = 0; i < charMap.length ; i++){
        let elem = charMap[i];
        if(elem === 1 || elem === 2){
            res+= String.fromCharCode(i + normalize)
        }
    }
    return res
}

a = "characters"
b = "alphabets"

uncommon(a,b)