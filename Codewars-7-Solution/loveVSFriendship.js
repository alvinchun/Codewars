const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}

function wordsToMarks(string) {
    return string.split('').reduce((acc, char) => {
      return acc + char.charCodeAt() - 96;
    }, 0);
  }
  function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
      marks += alphabet.indexOf(char) + 1;
    });
    return marks;
  }

  function wordsToMarks(string){
    return [...string].map(e => e.charCodeAt(0)-96).reduce((a,b) => a+b);
  }

  const wordsToMarks = s => [...s].map((a,i) => s.charCodeAt(i)-96).reduce((a,b) => a+b);


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
