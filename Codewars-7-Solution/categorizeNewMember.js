function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
  
  function openOrSenior(data){
    function determineMembership(member){
      return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
  }

  function openOrSenior(data){
    var result = [];
    data.forEach(function(member) {
      if(member[0] >= 55 && member[1] > 7) {
        result.push('Senior');
      } else {
        result.push('Open');
      }
    })
    return result;
  }

  function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
  }

  function openOrSenior(data){
    return data.map(function(d){
      return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
    });
  }

  
  const openOrSenior = data => {
    let getOpenOrSenior = [];
    for(i=0; i<data.length; i++){
      if(data[i][0]>=55 && data[i][1]>7){
        getOpenOrSenior.push("Senior");
      }else{
        getOpenOrSenior.push("Open");
      }
    }
    return getOpenOrSenior;
  }

  const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
