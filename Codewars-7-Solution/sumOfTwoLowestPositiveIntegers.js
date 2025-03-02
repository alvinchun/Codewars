function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };

  function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }

  function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };

  function sumTwoSmallestNumbers(numbers) {  
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    
    var n;
    for (i = 0; i < numbers.length; i++) {
      n = numbers[i];
        if(n < min) {
          secondMin = min;
        min = n;
      } else if( n < secondMin ) {
          secondMin = n;
      }
    }
    
    return min + secondMin;
  }

  const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

  var sumTwoSmallestNumbers = (numbers) => numbers.sort((a,b)=> a-b).slice(0, 2).reduce((a,b)=> a+b)

  function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function (a, b) { 
      return a - b;
    });
    return numbers[0] + numbers[1];
  };

  function sumTwoSmallestNumbers(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers.pop() + numbers.pop();
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
