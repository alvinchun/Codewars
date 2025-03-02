function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };

  function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
  };

  function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
            [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
  }

  function capitalize(s) {
    const S = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
      if (i & 1) {
        a += s[i]
        b += S[i]
      } else {
        a += S[i]
        b += s[i]
      }
    }
    return [a, b]
  }

  const capitalize = s => {
    const arr = s.split('');
    let a = '', b = '';
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        a += arr[i];
        b += arr[i].toUpperCase();
      } else {
        a += arr[i].toUpperCase();
        b += arr[i];
      }
    }
    
    return [a, b];
  };

  function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};

capitalize = s =>
    [
      [...s].map((l,i)=>i%2?l.toLowerCase():l.toUpperCase()).join(''),
      [...s].map((l,i)=>i%2?l.toUpperCase():l.toLowerCase()).join('')
    ]



    console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
