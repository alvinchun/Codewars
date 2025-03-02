function nbDig(n, d) {
    var res=0;
        for (var g=0;g<=n;g++){
          var square=(g*g+"").split("");
          square.forEach((s)=>s==d?res++:null)
        }return res;
    }

    function nbDig(n, d) {
        var o = '';
          for(var i = 0; i <= n; i++){
            o += Math.pow(i, 2);
          }
        return o.split(d).length-1
      }


let nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;

function nbDig(n, d) {
    let count = '';
    const re = RegExp(d, 'g');
    for (let i = 0; i <= n; i++){
      count += i**2;
    }
    return count.match(re).length;  
  }

  function nbDig(n, d) {
    let totalOfDigit = 0;
  
    for(let i = 0; i <= n; i++) {
      totalOfDigit += (i*i).toString().split('').filter(n => n == d).length;
    }
      
    return totalOfDigit;
}

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
