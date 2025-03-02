function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

  function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

  function findShort(s) {
    return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
  }

  function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
  }

  function findShort(s){
    var arr = s.split(' ');
    var min = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length < min) {
        min = arr[i].length;
      }
    }
    return min
  }

  function findShort(s){
    return s
      .split(' ')
      .map(a => a.length)
      .reduce((a, b) => Math.min(a, b))
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
