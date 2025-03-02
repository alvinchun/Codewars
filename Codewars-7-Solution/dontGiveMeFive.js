function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }

  function dontGiveMeFive(start, end){
    let res = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
  }

  function dontGiveMeFive(start, end) {
    let count = 0;

    for (let i = start; i <= end; ++i)
        if (!i.toString().includes("5"))
            count++;

    return count;
}

dontGiveMeFive = (s,e) => {
    for (var cnt = 0;s <= e;++s)
      (s+'').includes('5') || cnt++
    return cnt 
  }

  function dontGiveMeFive(start, end)
{
  return Array.from(Array(end-start+1),(e,i)=>i+start)
          .filter((e)=>(''+e).indexOf('5')===-1)
          .length;
}

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
