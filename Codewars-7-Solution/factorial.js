function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }

  function factorial(n){

    if (n < 0 || n > 12) {
       throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
     }
   return n<2 ? 1 : n*factorial(n-1);
   }

   function factorial(n) {
    if (n < 0 || n > 12)
      throw RangeError();
    var f = 1;
    while (n > 1)
      f *= n--;
    return f;
  }

  const factorial = n => {
    if (n < 0 || n > 12) throw RangeError;
    return n > 1 ? n * factorial(n - 1) : 1;
  }

  function factorial(n)
{
    if(n < 0 || n > 12) throw new RangeError('Ошибка');
    return n ? n * factorial(n-1) : 1;
}

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
