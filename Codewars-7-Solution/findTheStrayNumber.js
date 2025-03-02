function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }

  const stray = nums => nums.reduce((a, b) => a ^ b);

  function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
  }

  const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

  const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]

  function stray(nums){
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return nums.filter(x => x == max).length == 1 ? max : min
  }

  function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
  }


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
