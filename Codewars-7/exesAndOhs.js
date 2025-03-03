function XO(str) {
    let a = 0;
    let b = 0;
    let lowercaseStr = str.toLowerCase();
    //code here
    for(let i=0; i<lowercaseStr.length; i++){
        if(lowercaseStr[i] === 'x'){
            a++
        }

        if(lowercaseStr[i] === 'o'){
            b++
        }
    }

    if( a == b ){
        return true
    }else{
        return false
    }
}

function XO2(str) {
    let oxsInArray = str.toLowerCase().split('')

    return oxsInArray.filter(a => a === "o").length === oxsInArray.filter(a => a === "x").length
}



console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

console.log("-----------");

console.log(XO2("ooxx"));
console.log(XO2("xooxx"));
console.log(XO2("xooxx"));
console.log(XO2("ooxXm"));
console.log(XO2("zpzpzpp"));
console.log(XO2("zzoo"));

 //=> true
 //=> false
 //=> true
 //=> true // when no 'x' and 'o' is present should return true
 //=> false