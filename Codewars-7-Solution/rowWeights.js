function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }

  function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
  }

  rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

  function rowWeights(array){
    var team1 = 0;
    var team2 = 0;
    array.forEach(function(element,index) {
      if(index % 2 == 0){
        team1 += element;
      }else{
        team2 += element;
      }
    });
    return [team1, team2];
  }

  const rowWeights = arr => arr.reduce((a, w, i) => (a[i%2]+=w, a), [0, 0]);

  function rowWeights(array) {
    return array.reduce((t, x, i) => {
      t[i % 2] += x;
      return t;
    }, [0, 0]);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
