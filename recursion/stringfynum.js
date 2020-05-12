function stringifyNumbers(obj){
    let tempObj = {};

   if(Object.keys(obj).length == 0) return
   Object.keys(obj).forEach(key => {
       if(typeof(obj[key]) == 'number'){
           tempObj[key] = String(obj[key]);
       }
       else if(typeof(obj[key]) == 'object' && !Array.isArray(obj[key])){
          tempObj[key] = stringifyNumbers(obj[key])
       }
       else tempObj[key] = obj[key]
   })
   return tempObj
}

/*
let obj = {
   num: 1,
   test: [],
   data: {
       val: 4,
       info: {
           isRight: true,
           random: 66
       }
   }
}
/*

stringifyNumbers(obj)

/*
{
   num: "1",
   test: [],
   data: {
       val: "4",
       info: {
           isRight: true,
           random: "66"
       }
   }
}
*/