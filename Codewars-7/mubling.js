function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(s) {
	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

function accum (s) {
	return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}

function accum(str) {
    var res = [];
    for(var i = 0; i < str.length; i++) {
      var row = '';
      for(var j = 0; j < i + 1; j++) {
        row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
      }
      res.push(row);
    }
    return res.join('-');
  }

  function accum(s) {
	return s.split('')
  .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
  .join('-');
}

function accum(s) {
    return s
      .split('')
      .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
      .join('-')
  }





  function accum22(s) {
    // your code
    // console.log([...s]);

    let a = s.toUpperCase().split('')
    
    for(let i=0 ; i<s.length ; i++){
      a[i] += a[i].toLowerCase().repeat(i)    
    }
    
    return a.join('-')
  }


  console.log(accum22("abcd")); // return "5 1"
  console.log(accum22("RqaEzty")); // return "5 1"
  console.log(accum22("cwAt")); // return "5 1"

