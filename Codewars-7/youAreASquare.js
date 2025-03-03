//pow 가 아닌 숫자를 sqrt 하면 소수이며 1 나누어도 0이 아닌 소수다..
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

  const isSquare = n => Number.isInteger(Math.sqrt(n));

  var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }

  const isSquare = n => Math.sqrt(n) % 1 === 0

  var isSquare = function(n){

	if((Math.sqrt(n) % 1) == 0)
		return true;
	else
		return false;
}

var isSquare = function(n){
    for (var x = 0; x <= n; x++) {
      if (n === 0) {
        return true;
      } else if (n / x === x) {
        return true;
      }
    }
    
    return false;
  }

  var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0 ? true : false;
  };

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
