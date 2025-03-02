function solution(digits){
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
      if(Number(number) > answer){       //convert to number and compare against answer
        answer = Number(number);
      }
    }
    return answer;
  }

  function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}

const solution = digits =>
    [...digits].reduce((pre, _, idx) => Math.max(pre, digits.slice(idx, idx + 5)));

function solution(digits){
    let max = '';
    for (let i = 0; i < digits.length - 4; i++) {
      max = Math.max(digits.slice(i, i + 5), max)
    }
    return max
  }

  function solution(digits){
    return +digits.split('').map((v,i,arr)=>arr.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }

  function solution(digits){
    let arr = []
   for(let i=0; i < digits.length; i++){
     arr.push(+digits.slice(i, i+5))
   }
    return Math.max(...arr)
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
