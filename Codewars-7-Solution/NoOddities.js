var noOdds = values => values.filter(x => x % 2 === 0);

function noOdds( values ){
    function isEven(number){
      return number%2 == 0;
    }
    
    return values.filter(isEven);
  }

  var noOdds = values => values.filter(x => !(x % 2));

  function noOdds( values ){
    // Return all non-odd values
    var goodies = [];
    for(var i=0; i<values.length;i++){
        if(values[i]%2 == 0){
          goodies.push(values[i]);
        }
    }
    
    return goodies;
  }

  function noOdds( values ){
    // Return all non-odd values
    return values.filter(function(data){
      return data % 2 === 0
    });
  }

  function noOdds( values ){
    return values.filter(x => !(x % 2));
  }

  function noOdds( values ){
    return values.filter(x=>x%2==0)
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
