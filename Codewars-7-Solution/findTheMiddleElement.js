function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

  const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
  };

  var gimme = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i] !== max && inputArray[i] !== min){        
        index = i;
      }
    }
    return index;
  };

  var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
  };

  var gimme = function (inputArray) {
    var order = inputArray.slice().sort(function(a,b) { return a-b;});
    return inputArray.indexOf(order[1]);
     
   };

   var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice().sort(function(a,b){return a-b})[1])
  };

  const gimme = arr => arr.indexOf([...arr].sort((a,b) => a-b)[1]);

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
