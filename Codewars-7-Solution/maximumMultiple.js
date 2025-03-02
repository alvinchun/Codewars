function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }

  const maxMultiple = (divisor,bound) => bound - bound % divisor ;

  function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
  }

  function maxMultiple(divisor, bound) {
    while (bound % divisor) {
      bound--;
    }
    
    return bound;
  }

  function maxMultiple(divisor, bound){
    var max = 0;
    for(let j = divisor; j <= bound; j++) {
      if(j % divisor == 0 && j > max) {
       max = j;
      }
    }
      return max;
      
    
  }

  function maxMultiple(divisor, bound){
    return bound - (bound % divisor)
  } // dupa

  function maxMultiple(divisor, bound){
    let arr = [];
      for (let i = divisor; i <= bound; i++) {
          if (i % divisor == 0) {
              arr.push(i)
          }
      }
      return Math.max(...arr);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
