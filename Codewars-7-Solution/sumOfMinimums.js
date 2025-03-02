function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }

  function sumOfMinimums(arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++){
     total += Math.min(...arr[i])
    }
    
    return total;
  }

  const sumOfMinimums = arr => arr.reduce((a, v) => a + Math.min(...v), 0);

  const sumOfMinimums = ( array ) => array.map( el => Math.min(...el) ).reduce( (a, b)=> a + b, 0)

  function sumOfMinimums(arr) {
    return arr.reduce((a, b) => a + Math.min(...b), 0);
  }

  function sumOfMinimums(arr) {
    let sum = 0
    arr.forEach((x)=>sum = sum + x.sort(function(a, b){return a - b})[0])
    return sum
  }

  function sumOfMinimums(arr) {
    let sum = 0;
    for(let a of arr){
    sum += Math.min.apply(Math, a);
    }
    return sum;
    
    
    
    }


    console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
