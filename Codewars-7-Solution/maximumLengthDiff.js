function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }

  function mxdiflg(a1, a2) {
    var max = -1;
    for(var A1 of a1)
      for(var A2 of a2)
        max = Math.max(max, Math.abs(A1.length - A2.length));
    return max;
  }

  function mxdiflg(a1, a2) {
    const minmax = (minmax, x) => [Math.min(minmax[0], x.length), Math.max(minmax[1], x.length)];
    if (a1.length == 0 || a2.length == 0) return -1;
    let minmax1 = a1.reduce(minmax, [Infinity, -1]);
    let minmax2 = a2.reduce(minmax, [Infinity, -1]);
    return Math.max(minmax1[1] - minmax2[0], minmax2[1] - minmax1[0]);
  }

  function mxdiflg(a1, a2) {
    if(!a1.length||!a2.length)return -1;
    a1.sort((a,b)=>a.length-b.length);
    a2.sort((a,b)=>a.length-b.length)
    return Math.max(Math.abs(a1[0].length-a2[a2.length-1].length),Math.abs(a2[0].length-a1[a1.length-1].length));
}

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
