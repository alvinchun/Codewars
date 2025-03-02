function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}

function getDivisorsCnt(n) {
    let counter = 0;
  
    if (n % Math.sqrt(n) == 0) {
      counter++;
    }
  
    for (let i = 1; i < Math.sqrt(n); i++) {
      if (n % i == 0) {
        counter += 2;
      }
    }
  
    return counter;
  }
  
  function getDivisorsCnt(n){
    var res=[], sqrt=Math.sqrt(n);
    for(let i=1; i<=sqrt; ++i){
      if(n%i==0){res.push(i); res.push(n/i);}
    }
    res = Array.from(new Set(res));
    return res.length;
}

function getDivisorsCnt(n) {
    let count = 0
    if (n % Math.sqrt(n) == 0) {
      count++
    }
    for (let i = 0; i < Math.sqrt(n); i++) {
      if (n % i == 0) {
        count += 2
      }
    }
    return count
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
