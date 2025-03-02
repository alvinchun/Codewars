const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);

function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
  }

  function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(n){
      return n % 2 == 0;
    });
  }


  function isEven(num){
    return num%2==0
  }
  
  function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    var filtered = numbersArray.filter(isEven);
    return filtered;
  }

  function getEvenNumbers(num){
    return num.filter(el => el % 2 == 0);
  }

  const getEvenNumbers = numbersArray => numbersArray.filter(a => a % 2 === 0);

  const getEvenNumbers = arr => 
	arr.filter(x => !(x & 1));

  function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    var evenNums = numbersArray.filter(function(num) {
      return (num % 2) === 0;
    });
    
    return evenNums;
  }

  function getEvenNumbers(numbersArray){
    return numbersArray.filter((number) => number % 2 === 0)
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
