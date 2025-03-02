function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
  }

  function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  }

  function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
  }

  function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
  }


  function descendingOrder22(n){
    return +n.toString().split('').sort((a,b)=> b - a).join('')
  }

  function descendingOrder23(n){
    return Number(n.toString().split('').sort((a,b)=> b - a).join(''))
  }

  function descendingOrder(n){
    return +(n + '').split('').sort((a,b)=> b - a).join('')
  }

  // descendingOrder22(42145)
  descendingOrder23(42145)

  console.log(descendingOrder22(42145));
  console.log(descendingOrder23(42146));

  