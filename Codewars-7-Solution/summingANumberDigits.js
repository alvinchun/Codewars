function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }

  function sumDigits(number) {
    var i = 0;
var sum = 0;
number = Math.abs(number)
while(number != 0)
{
        sum += number % 10
    number = Math.floor(number/10)
}
return sum
}

sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);

function sumDigits(number) {
    // Turn number into absolute value -> Stringify number -> Split at each character
    var values = String(Math.abs(number)).split("");
    // Instantiate variable to hold math result
    var product = null;
    // For each value, add the value to the product
    for (var i = 0; i < values.length; i++) {
      product = product + Number(values[i]);
    }
    // Return the product variable
    return product;
  }

  const sumDigits = number => String(number).replace('-', '').split('').reduce((prev, curr) => prev + Number(curr), 0);

  function sumDigits(number) {
    var str_num = "" + number;
    
    var result = 0;
    str_num.split('').forEach(function(el) {
      var digit = parseInt(el);
      if(isNaN(digit)) {
        return;
      }
      
      result += digit;
    });
    
    return result;
  }


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
