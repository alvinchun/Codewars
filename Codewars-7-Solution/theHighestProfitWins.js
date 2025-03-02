function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

  const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];

  function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
  }

  function minMax(arr) {
    var a = arr.sort(function(a,b) {return a-b});
    return [a[0], a[a.length-1]];
}

function minMax(arr){
    var max = arr[0], min = arr[0];
    for(var i=0; i<arr.length; i++) {
      if(arr[i]>max) max = arr[i];
      if(arr[i]<min) min = arr[i];
    }
    return [min,max];
  }

  function minMax(arr){
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    return [min, max];
  }

  function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]; // fix me!
  }

  function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
  }

  var minMax = arr => [Math.min.apply(null, arr), Math.max.apply(null, arr)];

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
