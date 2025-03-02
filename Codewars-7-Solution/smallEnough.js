function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

  smallEnough = (a, l) => a.every(e => e <= l)

  function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }

  function smallEnough(a, limit){
    for(var i of a){
      if(i > limit)
        return false;
    }
    return true;
  }

  function smallEnough(a, limit){
	for (let i = 0; i < a.length; i++){
  	if (a[i] > limit) {
    	return false
    }
  }
  return true

}

function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
