var breakChocolate = function(n, m) {
    return (n*m === 0) ? 0 : n * m - 1;
   };

   var breakChocolate = function(n, m) {
    if(n === 0 || m === 0) return 0
    return n*m - 1;
   };

   var breakChocolate = function(n, m) {
    return Math.max(0, m*n - 1);
  };

  var breakChocolate = function(n, m) {
    return Math.max(n*m-1,0);
    };

    var breakChocolate=function(n,m){return n&&m?n*m-1:0};

    var breakChocolate = function(n, m) {
        var slices = (n * m) - 1;
      
        if(slices < 0) slices = 0; 
        
        return slices;
      };

      console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
