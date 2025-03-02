function addBinary(a,b){
    return (a+b).toString(2)
  }

  const addBinary = (a, b) => (a + b).toString(2);

  function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
  }

  function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
  }
  
  function addBinary(a,b) {
    return decimalToBinary(a+b);
  }

  function addBinary(a,b){
    return Number(a + b).toString(2);
  }

  const addBinary = (a, b) => Math.trunc(a + b).toString(2)

  function addBinary(a,b){
    if (a.isIntiger&& b.isIntiger){ //if all argument is intiger digits
      return (a+b).toSting(2); //ok , return a string
      } else {
      return (parseInt(a,10)+parseInt(b,10)).toString(2); //if some of argument send as a string - parse values to 10 digits int. values and return as a binary 
       }
    }

    function addBinary(a,b){
        let c = a + b;
        return c.toString(2);
      }
    
      function addBinary(a,b){
        var sum = a + b, binary = '';
      
        while (sum > 0) {
          binary = (sum % 2) + binary;
          sum = Math.floor(sum / 2);
        }
        
        return binary;
      }

      console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
