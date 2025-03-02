function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }

  function minValue(values){
    return Number(Array.from(new Set(values)).sort().join(''))
  }

  function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
  }

  const minValue = (v) => +[...new Set(v)].sort().join``

  function minValue(values){
    return parseInt([...new Set(values)].sort((a,b) => a-b).join(''));
  }

  const minValue = (a) => +[...new Set(a)].sort((a,b)=>a-b).join('');

  function minValue(values){
    var uniq = values.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
  });
    return parseInt(uniq.sort().join(''));
  }


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
