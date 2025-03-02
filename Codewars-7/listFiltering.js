function filter_list(l) {
  return l.filter(v => typeof v == "number")
 }


 function filter_list(l) {
  return l.filter(Number.isInteger);
}

function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

console.log(filter_list([1,2,'a','b']));







function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

  const filter_list = l => l.filter(c => typeof c === 'number');

  function filter_list(l) {
    var res = [];
                for(var item=0;item<l.length;item++)
                {
                    if (typeof l[item] === "number")
                    {
                        res.push(l[item]);
                    }
      
                }
                return res;
    }

    function filter_list(l) {
        return l.filter(i=> typeof i !== 'string');
      }


