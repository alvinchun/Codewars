const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
const isEven = n => n % 2 === 0;
const evenNumbers = (a, n) => a.filter(isEven).slice(-n);

function evenNumbers(array, number) {
    let arr = [];
    for (let i=array.length-1;number>0;i--){
      if (array[i] % 2 == 0) {
        arr.push(array[i]);
        number--;
      }
    }
return arr.reverse();
}

var evenNumbers = (arr, num) => arr.filter(el=> el % 2 == 0).slice(-num)

function evenNumbers(array, number) {
    return array.filter(num => num % 2 == 0).slice(-number);
  }

  const evenNumbers = (array, number) =>
    array.filter(val => !(val & 1)).slice(-number);

  const evenNumbers = (a, n) => a.filter(e => !(e % 2)).slice(-n);

  function evenNumbers(array, number) {
    let l = array.filter(e => e % 2 === 0)
    return l.slice(l.length - number)
}
function evenNumbers(a, n) {
    return a.filter(a => a % 2 === 0).slice(-n);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
