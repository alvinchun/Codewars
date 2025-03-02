function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
  }

  function solve(s){
    let c = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) c++;
    }
    return (c > s.length/2) ? s.toUpperCase() : s.toLowerCase()
 }


 console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
