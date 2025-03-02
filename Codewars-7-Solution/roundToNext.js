function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }

  function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }

  const roundToNext5 = n => Math.ceil(n / 5) * 5;

  function roundToNext5(n){
    while(n%5) n++;
    return n;
  }

  function roundToNext5(n){
    if (n % 5 === 0) {
      return n;
    }
    return roundToNext5(n + 1);
  }

  function roundToNext5(n){
    if(n % 5 == 0) return n
    n++
    return roundToNext5(n)
  }

  const roundToNext5=a=>Math.ceil(a/5)*5

  function roundToNext5(n){
    return n % 5 === 0 ? n : (n < 0 ? n - (n % 5) : n - (n % 5) + 5);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
