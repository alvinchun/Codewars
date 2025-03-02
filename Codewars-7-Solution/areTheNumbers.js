function inAscOrder(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        return false; 
      }
    }
    return true;
  }

  function inAscOrder(arr) {
    return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
  }

  const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');

  function inAscOrder(arr) {
    return arr.slice(1).every((x, i) => x >= arr[i]);
  }

  const inAscOrder = a => a
  .slice()
  .sort((x, y) => x - y)
  .every((e, i) => e === a[i]);

  const inAscOrder = (arr) => arr.length === 1 || 
                    arr.slice(1).map((el,i) => el > arr[i]).every(e=> e === true) || false 

                    function inAscOrder(arr) {
                        for (let i=1; i<arr.length; ++i)
                          if (arr[i] < arr[i-1]) return false;
                        
                        return true;
                      }


                      console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
