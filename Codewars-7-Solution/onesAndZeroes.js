const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
  };

  function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
  }

  const binaryArrayToNumber = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
  }

  const binaryArrayToNumber = arr => {
    return parseInt(Number(arr.join('')), 2)
  };

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
