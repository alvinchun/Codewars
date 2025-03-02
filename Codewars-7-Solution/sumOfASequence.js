const sequenceSum = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
  };

  const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };

  function sequenceSum(begin, end, step) {
    let sum = 0
    for (let i = begin; i <= end; i += step) {
      sum += i
    }
    return sum
  }

  const sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);

  const sequenceSum = (begin, end, step) => {
    if (begin > end)
      return 0;
    const n = Math.floor((end - begin) / step) + 1;
    return (2 * begin + step * (n - 1)) * n / 2;
  };

  const sequenceSum = (begin, end, step) => {
    let n = Math.floor((end - begin) / step + 1);
    return n <= 0 ? 0 : n * (begin + (begin + (n - 1) * step)) / 2;
  };


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
