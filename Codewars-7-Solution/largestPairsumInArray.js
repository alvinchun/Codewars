function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }

  function largestPairSum(numbers) {
    var [a, b] = numbers.sort((a, b) => b - a)
    return a + b
  }

  const largestPairSum = numbers => numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a + b);

  function largestPairSum(numbers)
{
  numbers.sort((a,b) => b - a);
  return numbers[0] + numbers[1];
}

function largestPairSum(numbers)
{

    numbers.sort(function(a,b){
        return b-a;
    });
    return numbers.shift()+numbers.shift();

}

const largestPairSum = ($) => $.sort((a, b)=> a > b).slice(-2).reduce((a, b) => a + b, 0)

const largestPairSum = a => a.sort((x, y) => y - x)[0] + a[1];

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
