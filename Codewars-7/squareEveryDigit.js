

  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }

  function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
  }

  function squareDigits(num){
    let result = num
      .toString()
      .split("")
      .map( num => parseInt(num) )
      .map( num => num * num )
      .join("")
     
    return parseInt(result)
  }

  function squareDigits(num){
    //may the code be with you
    var numS = num.toString();
    var output = "";
    for (var i = 0; i < numS.length; i++) {
      output += parseInt(numS[i]) * parseInt(numS[i]);
    }
    return parseInt(output);
  }

  function squareDigits22(num){
    return parseInt(num.toString().split('').map(e=> Math.pow(e, 2)).join(''))
  }

  function squareDigits33(num){
    console.log(num.toString().split('').map(e=>parseInt(e)).map(e=>e*e).join(''))
  }

  // console.log(squareDigits22(9119));
  // console.log(squareDigits22(765));
  squareDigits33(765)
  console.log(squareDigits33(765));

  


