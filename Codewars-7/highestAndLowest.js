function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

  function highAndLow(numbers){
    var arr = numbers.split(' ').sort((a, b) => a - b );
    return arr[arr.length -1] + ' ' + arr[0];
  }

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

  function highAndLow22(numbers){
    // ...
    let numbersInArray = numbers.split(' ')
    let numbersInArray2 = numbers.split(' ').map(Number)
    let numbersInArray3 = numbers.split(' ').map(e => parseInt(e))

    console.log(numbersInArray);
    console.log(numbersInArray2);
    console.log(numbersInArray3);

    return Math.max(...numbersInArray2) + ' ' + Math.min(...numbersInArray2)
  }

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"