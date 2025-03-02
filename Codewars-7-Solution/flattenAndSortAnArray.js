"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

"use strict";

const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);


function flattenAndSort(array) {
    var newArray = [];
    for(var i =0;i<array.length;i++)
    {
      for(var j=0;j<array[i].length;j++)
      {
        newArray.push(array[i][j]);
      }
    }
      
    return newArray.sort((a,b) =>  a-b);
  }

  "use strict";

function flattenAndSort(array) {
  
  return array.flat().sort((a,b)=>a-b);
}

function flattenAndSort(array) {
    return array
      .reduce((result, current) => [...result, ...current],[])
      .sort((a, b) => a - b)
      ;
  }

  const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)

  const flattenAndSort = $ => $.toString().split(',').filter(e => e).map(Number).sort((a,b)=>a-b)


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
