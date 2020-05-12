
function collectStrings(obj){
    let strings = [];
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] == 'string'){
            strings.push(obj[key]);
        }
        else if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
            strings = strings.concat(collectStrings(obj[key]));
        }
    })
    return strings
}



let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])