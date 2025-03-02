function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }

  const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)

  function twoOldestAges(ages){
    let oldest = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < ages.length; ++i)
    {
      if (ages[i] > oldest)
      {
        second = oldest;
        oldest = ages[i];
      }
      else if (ages[i] > second)
      {
        second = ages[i];
      }
    }
    
    return [second, oldest];
  }

  function twoOldestAges(ages){
    var x = ages.sort(function(i,j) { return j-i;});
    return [x[1],x[0]];
  }
  function twoOldestAges(ages){
    return ages.slice(0).sort((a, b) => a - b).slice(-2);
 }

 function twoOldestAges(ages){
    return ages.sort((a,b)=>a-b).slice(-2);
 }

 function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b).slice(-2);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
