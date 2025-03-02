function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }

  const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]);

  function arithmetic(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b); 
  }

  const arithmetic = (a, b, operator) => {
    return  ( 
      operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
    )
   }

   function arithmetic(a, b, operator){
    //your code here!
    var mathFun = {
      'add': function (a, b) {
          return a+b;
      },
      'subtract': function (a, b) {
          return a-b;
      },
      'multiply': function (a, b) {
          return a*b;
      }, 
      'divide': function (a, b) {
          return a/b;
      }
    }
  
    return mathFun[operator](a,b);
  }

  function arithmetic(a, b, operator){
    return ops[operator](a, b);
  }
  
  const ops = {
    "add"      : (a, b) => a + b,
    "subtract" : (a, b) => a - b,
    "multiply" : (a, b) => a * b,
    "divide"   : (a, b) => a / b
  }

  function arithmetic(a, b, operator){
    const operadores = {
      add: a + b,
      subtract: a - b,
      multiply: a * b,
      divide: a / b
    }
    return operadores[operator];
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
